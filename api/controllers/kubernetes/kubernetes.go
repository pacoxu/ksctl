package kubernetes

import (
	k3s_pkg "github.com/kubesimplify/ksctl/api/k8s_distro/k3s"
	kubeadm_pkg "github.com/kubesimplify/ksctl/api/k8s_distro/kubeadm"
	"github.com/kubesimplify/ksctl/api/resources"
)

func HydrateK8sDistro(client *resources.KsctlClient) {
	switch client.Metadata.K8sDistro {
	case "k3s":
		client.Distro = k3s_pkg.ReturnK3sStruct()
	case "kubeadm":
		client.Distro = kubeadm_pkg.ReturnKubeadmStruct()
	default:
		panic("Invalid k8s provider")
	}
}

func ConfigureCluster(client *resources.KsctlClient) {
	client.Distro.ConfigureLoadbalancer(client.State)
	for no := 0; no < int(client.Metadata.NoDS); no++ {
		client.Distro.ConfigureDataStore(client.State)
	}
	for no := 0; no < int(client.Metadata.NoCP); no++ {
		client.Distro.ConfigureControlPlane(no, client.State)
	}
	kubeconfig, _ := client.Distro.GetKubeConfig(client.State)

	client.State.Save("kubeconfig", kubeconfig)

	for no := 0; no < int(client.Metadata.NoWP); no++ {
		_ = client.Distro.JoinWorkerplane(client.State)
	}
}