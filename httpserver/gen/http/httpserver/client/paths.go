// Code generated by goa v3.13.0, DO NOT EDIT.
//
// HTTP request path constructors for the httpserver service.
//
// Command:
// $ goa gen github.com/kubesimplify/ksctl/httpserver/design -o httpserver

package client

// GetHealthHttpserverPath returns the URL path to the httpserver service get health HTTP endpoint.
func GetHealthHttpserverPath() string {
	return "/healthz"
}
