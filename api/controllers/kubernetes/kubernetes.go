package kubernetes

import (
	"fmt"

	"github.com/kubesimplify/ksctl/api/k8s_distro/k3s"
	"github.com/kubesimplify/ksctl/api/k8s_distro/kubeadm"
	"github.com/kubesimplify/ksctl/api/resources"
	k8s "github.com/kubesimplify/ksctl/api/resources/controllers/kubernetes"
)

func NewController(b *k8s.ClientBuilder) {
	// TODO: Which one to call controller will decide
	var abcd k8s.ControllerInterface

	switch b.K8sDistro {
	case "k3s":
		abcd = k3s.WrapK8sControllerBuilder(b)
	case "kubeadm":
		abcd = kubeadm.WrapK8sControllerBuilder(b)
	}
	fmt.Printf("\tReq for HA: %v\n\n", b.IsHA)
	_, _ = abcd.GetKubeconfig()
	// abcd.SetupLoadBalancer()
	// _, _ = abcd.SetupDatastore()
}
func WrapK8sEngineBuilder(b *resources.Builder) *k8s.ClientBuilder {
	api := (*k8s.ClientBuilder)(b)
	return api
}
