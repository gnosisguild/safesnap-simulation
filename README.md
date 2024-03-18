# Safesnap Simulation

This project serves as a simple wrapper around Tenderly's Simulation API, enabling private use of the Tenderly access token and secure interaction with the Tenderly API.

## Requirements

- Node.js
- npm or yarn
- Cloudflare account
- Wrangler CLI

## Local Development

To run this project locally, you need to install the dependencies and use Wrangler's `dev` command to start the development server.

## Live Deployment

The deployed Cloudflare worker can be accessed at: [https://safesnap-simulation.gnosisguild.workers.dev](https://safesnap-simulation.gnosisguild.workers.dev)

### Setup

1. Clone the repository:

```bash
git clone url_to_repository
cd safesnap-simulation
```

2. Install dependencies:

```bash
npm install
```

or if you use yarn:

```bash
yarn install
```

3. Start the local development environment with Wrangler:

```bash
wrangler dev
```

## Simulation Request Example

The following is an example of a simulation body for bundle transactions:

```json
{
  "simulations": [
    {
      "network_id": "",
      "from": "",
      "to": "",
      "input": "",
      "value": "",
      "save": true,
      "save_if_fails": true,
      "gas": 8000000,
      "gas_price": 0,
      "simulation_type": "full"
    }
  ]
}
```

This command starts a local server where you can test your worker. It automatically reloads your worker when you make changes to the source code.

## Deploying to Cloudflare Workers

To deploy the worker to Cloudflare Workers, you need to configure your project with the necessary environment variables and use the `wrangler deploy` command.

### Environment Variables

The worker requires the following environment variables to connect to the Tenderly API:

- `TENDERLY_USER`: Your Tenderly username. Set this variable in `wrangler.toml`.
- `TENDERLY_PROJECT`: The Tenderly project name. Set this variable in `wrangler.toml`.
- `TENDERLY_ACCESS_KEY`: This should be kept secret. It is added to the Cloudflare worker via API in a GitHub Action. You can also manually add this using the Cloudflare Dashboard for local testing or staging environments.

### Deployment

1. To deploy the worker to Cloudflare, ensure you have set up your `wrangler.toml` with the correct account details and environment variables (excluding the secret `TENDERLY_ACCESS_KEY`).

2. Deploy your worker to Cloudflare Workers:

```bash
wrangler publish
```

Ensure that `TENDERLY_ACCESS_KEY` is securely added to your Cloudflare Worker as described in the "Environment Variables" section.

## Contributing

Contributions to this project are welcome. Please ensure to follow the code style.
