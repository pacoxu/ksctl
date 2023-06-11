---
sidebar_position: 1
---

# Azure

AZURE support for the HA and managed support


## Prequisites

:::note
we need credentials to access clusters
:::

:::caution
these are confidential information so shouldn't be shared with anyone
:::

### Azure Dashboard

:::note
Azure Dashboard contains all the credentials required
:::

![azure-dashboard](/img/azure/azure-dashboard.png)


### Azure Subscription ID

:::note
subscription id using your subscription
:::

![azure-subscription](/img/azure/azure-subs-id.png)



### Azure Tenant ID

:::note
lets get the tenant id from the Azure
:::

![](/img/azure/azure-tenantid.png)



### Azure Client ID

:::note
it represents the id of app created
:::

![](/img/azure/azure-create-app-reg.png)

![](/img/azure/azure-app-reg.png)

![](/img/azure/azure-clientid.png)



### Azure Client Secret

:::note
it represents the secret associated with the app in order to use it
:::

![create app secret](/img/azure/azure-client-secret1.png)


![after-click](/img/azure/azure-client-secret.png)


![copy-secret](/img/azure/azure-client-secret2.png)

## Current Features

### Cluster features
#### High Avalibility cluster
clusters which are managed by the user not by cloud provider

    using K3s kubernetes distribution which is lightweight

custom components being used
- MySQL database VM
- HAProxy loadbalancer VM for controlplane nodes
- controlplane VMs
- workerplane VMs

#### Managed Cluster
clusters which are managed by the cloud provider

### Other capabilities

#### Create, Update, Delete, Switch

:::info Update the cluster infrastructure
**Managed cluster**: till now it's not supported

**HA cluster**
- addition and deletion of new workerplane node
- SSH access to each cluster node (DB, LB, Controplane) _Public Access_, secured by private key
- SSH access to each workplane _Private Access_ via local network, secured by private key
:::

:::caution Creation of HA cluster
when the cluster is created you need to run a command which fixes the issue [#105](https://github.com/kubesimplify/ksctl/issues/105)
:::
