---
description: Web3 gateway for Emerald and Sapphire ParaTimes
---

# Oasis Web3 Gateway for your EVM ParaTime

This guide will walk you through the steps needed to set up the Oasis Web3
gateway for EVM-compatible ParaTimes, such as Emerald and Sapphire.

:::caution

Each ParaTime requires its own instance of the Web3 gateway!

:::

## Prerequisites

### Hardware

In addition to the minimum hardware requirements for running the Oasis node,
the following should be added for running the Web3 gateway:

* CPU:
  * Minimum: 2.0 GHz x86-64 CPU
  * Recommended: 2.0 GHz x86-64 CPU with 2 cores/vCPUs
* Memory:
  * Minimum: 4 GB of ECC RAM
  * Recommended: 8 GB of ECC RAM
* Storage:
  * Minimum: 300 GB of SSD or NVMe fast storage
  * Recommended: 500 GB of SSD or NVMe fast storage

:::info

To put the figures above into perspective, the Web3 gateway for Emerald with
PostgreSQL encountered **210 GB** of database growth in ~5 months between
Nov 18, 2021 and Apr 11, 2022 (since the [Emerald Mainnet launch]).

:::

### Oasis ParaTime Client Node

The Web3 gateway requires a locally deployed ParaTime-enabled Oasis Node.
First, follow the
[Oasis ParaTime client node](run-your-node/paratime-client-node.mdx)
guide on how to configure the Oasis client node with one or more ParaTimes.
Always use the exact combination of the Oasis node/ParaTime versions as
published on the network parameters page for either [Mainnet] or [Testnet]. 

Apart from the transactions that happen on-chain and produce some effects,
there are also a number of read-only queries implemented in the Oasis protocol
and EVM. Some of them may be quite resource-hungry such as simulating EVM calls
and are disabled by default to avoid DDOS attacks. If your Oasis node instance
will only be used by you and your Web3 gateway(s), you can safely enable
*expensive* transactions by adding the following to your Oasis node config:

```yaml title='config.yml'
# ... sections not relevant are omitted ...
runtime:
  mode: client
  paths:
    - {{ emerald_bundle_path }}
    - {{ sapphire_bundle_path }}

  config:
    "{{ emerald_paratime_id }}":
      estimate_gas_by_simulating_contracts: true
      allowed_queries:
        - all_expensive: true
    "{{ sapphire_paratime_id }}":
      estimate_gas_by_simulating_contracts: true
      allowed_queries:
        - all_expensive: true
```

In the config above replace `{{ ... }}` placeholders with actual ParaTime IDs:
* `{{ emerald_paratime_id }}`:
  * Emerald on [Mainnet][mainnet-emerald]: `000000000000000000000000000000000000000000000000e2eaa99fc008f87f`
  * Emerald on [Testnet][testnet-emerald]: `00000000000000000000000000000000000000000000000072c8215e60d5bca7`
* `{{ sapphire_paratime_id }}`:
  * Sapphire on [Testnet][testnet-sapphire]: `000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c`

### PostgreSQL

The Web3 gateway stores blockchain data in a
[PostgreSQL](https://www.postgresql.org/) database version **13.3** or higher.
Install it by following instructions specific to your operating system and
environment.

Because each ParaTime requires its own instance of the Web3 gateway, you will
have to create a separate database and a separate user for each Web3 instance.

## Download Oasis Web3 Gateway

Check the required version of the Web3 gateway for the network you will be
deploying it to: [Mainnet], [Testnet]. Next, download the Oasis-provided
binaries from the [official GitHub repository][github-releases].

Alternatively, you can download the source release and compile it yourself.
Consult the [README.md] file for more information.

## Running the Web3 Gateway

Copy the content below to the config file of your Web3 gateway.

```yaml title='gateway.yml'
# Uncomment the runtime_id below.
runtime_id: {{ paratime_id }}
# Path to your internal.sock file in the root Oasis node datadir.
node_address: "unix:{{ oasis_node_unix_socket }}"

# By default, we index the entire blockchain history.
# If you are low on disk space or you use the gateway just for submitting transactions, enable
# pruning below.
enable_pruning: false
pruning_step: 100000
indexing_start: 0

log:
  level: debug
  format: json

database:
  # Change host and port, if PostgreSQL is running somewhere else.
  host: "127.0.0.1"
  port: 5432
  # Enter your database name, username and password.
  db: {{ postgresql_db }}
  user: {{ postgresql_user }}
  password: {{ postgresql_password }}
  dial_timeout: 5
  read_timeout: 10
  write_timeout: 5
  max_open_conns: 0

gateway:
  chain_id: {{ chain_id }}
  http:
    # Change host to your external IP address if you have users accessing Web3 from the outside.
    host: "localhost"
    # Use different port for each Web3 gateway instance, if all run locally.
    port: 8545
    cors: ["*"]
  ws:
    # Change host to your external IP address if you have users accessing Web3 from the outside.
    host: "localhost"
    # Use different port for each Web3 gateway instance, if all run locally.
    port: 8546
    origins: ["*"]
  method_limits:
    get_logs_max_rounds: 100
```

Use the following placeholder values:

- `{{ paratime_id }}`: The ID of the Emerald or Sapphire ParaTime which you are
  configuring the Web3 gateway for (see [above](#oasis-paratime-client-node)).
- `{{ oasis_node_unix_socket }}`: Path to the `internal.sock` file created by
  the Oasis node.
- `{{ postgresql_db }}`, `{{ postgresql_user }}`, `{{ postgresql_password }}`:
  Database name and credentials for your PostgreSQL database.
- `{{ chain_id }}`: The chain ID of your EVM network:
  - Emerald on [Mainnet][emerald-mainnet]: `42262`
  - Emerald on [Testnet][emerald-testnet]: `42261`
  - Sapphire on [Testnet][sapphire-testnet]: `23295`

:::tip

All configuration settings can also be set via environment variables. For
example, instead of setting up the database password in the config file above
you can export:

```shell
DATABASE__PASSWORD=your_password_here
```

:::

To start the Web3 gateway invoke:

```shell
./emerald-web3-gateway --config gateway.yml
```

The Web3 gateway will connect to your Oasis node and start indexing available
blocks (i.e. from the last network upgrade). This may — depending on your
hardware and the size of the blockchain — take hours.

If your database contains any tables populated by the previous version of the
Web3 gateway, migration scripts will automatically be applied upon startup.

If you want to migrate the database separately, run:

```shell
./emerald-web3-gateway migrate-db --config gateway.yml
```

:::caution

Above, we are invoking the `emerald-web3-gateway` process directly from the
shell, so you can quickly start using it. If you are setting up a production
environment, you should [configure the Web3 gateway as a system service][system
service] and register it in the service manager for your platform.

:::

## Archive Web3 Gateway

Each Oasis Web3 gateway can only connect to and synchronize blocks from a
single Oasis node instance. To enable access to older EVM blocks, you can
configure the Web3 gateway to behave as a proxy to another — archive — instance
of the Web3 gateway.

First, set up an instance of the [Oasis archive node]. Then, repeat the similar
process of setting up a Web3 gateway as you would normally do, but configure it
to use the newly set up Oasis archive node.

Suppose the archive instances of the Web3 gateway and Oasis nodes are up
and running and the archive Web3 gateway is listening on the local port `8543`.
Enable the proxy for historical blocks by adding the following to your (live)
Web3 gateway config and restart it:

```yaml title='gateway.yml'
# URI of an archive web3 gateway instance for servicing historical queries.
archive_uri: 'http://localhost:8543'
```

If a query requires information on the block which isn't stored in the
live version of the Web3 gateway, the gateway will pass the query to the
configured archive instance and return the obtained result.

:::info

Historical estimate gas calls are not supported.

:::

## Troubleshooting

### Wipe state to force a complete reindex

If you encounter database or hardware issues, you may need to wipe the
database and reindex all blocks. First, run the `truncate-db` subcommand:

```bash
emerald-web3-gateway truncate-db --config gateway.yml --unsafe
```

Then, execute the `emerald-web3-gateway` normally to start reindexing the
blocks.

:::danger

This will wipe all existing state in the PostgreSQL database and can lead to
extended downtime while the Web3 Gateway is reindexing the blocks.

:::

[Emerald Mainnet launch]:
  https://medium.com/oasis-protocol-project/oasis-emerald-evm-paratime-is-live-on-mainnet-13afe953a4c9
[emerald-mainnet]: ../dapp/emerald/README.mdx#mainnet
[emerald-testnet]: ../dapp/emerald/README.mdx#testnet
[github-releases]: https://github.com/oasisprotocol/emerald-web3-gateway/releases
[Mainnet]: mainnet/README.md
[mainnet-emerald]: mainnet/README.md#emerald-paratime
[Oasis archive node]: run-your-node/archive-node.md
[README.md]: https://github.com/oasisprotocol/emerald-web3-gateway/blob/main/README.md#building-and-testing
[sapphire-testnet]: ../dapp/sapphire/README.mdx#testnet
[system service]: run-your-node/prerequisites/system-configuration.mdx#non-root
[Testnet]: testnet/README.md
[testnet-emerald]: testnet/README.md#emerald-paratime
[testnet-sapphire]: testnet/README.md#sapphire-paratime
