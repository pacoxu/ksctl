"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2887],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=d(a),c=l,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,o(o({ref:e},s),{},{components:a})):n.createElement(k,o({ref:e},s))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8193:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={},o="CLI Command Reference",i={unversionedId:"cli/CLI command reference",id:"cli/CLI command reference",title:"CLI Command Reference",description:"This topic contains information about ksctl-cli commands, syntax, options, resource types, and a few examples of command usage.",source:"@site/docs/cli/CLI command reference.md",sourceDirName:"cli",slug:"/cli/CLI command reference",permalink:"/ksctl/docs/cli/CLI command reference",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/CLI command reference.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ksctl cli",permalink:"/ksctl/docs/category/ksctl-cli"},next:{title:"Installation",permalink:"/ksctl/docs/cli/install"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2},{value:"Register Credentials",id:"register-credentials",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Example Output",id:"example-output",level:3},{value:"Create a Cluster",id:"create-a-cluster",level:2},{value:"Syntax",id:"syntax-2",level:3},{value:"Commands",id:"commands-1",level:3},{value:"Options",id:"options-1",level:3},{value:"Examples",id:"examples",level:3},{value:"Example Output",id:"example-output-1",level:3},{value:"Delete a cluster",id:"delete-a-cluster",level:2},{value:"Syntax",id:"syntax-3",level:3},{value:"Options",id:"options-2",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Example Output",id:"example-output-2",level:3},{value:"Switch",id:"switch",level:2},{value:"Options",id:"options-3",level:3},{value:"Example",id:"example",level:3},{value:"Example Output",id:"example-output-3",level:3},{value:"Get",id:"get",level:2},{value:"Example",id:"example-1",level:3},{value:"Examples Output",id:"examples-output",level:3}],s={toc:d},m="wrapper";function u(t){let{components:e,...a}=t;return(0,l.kt)(m,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cli-command-reference"},"CLI Command Reference"),(0,l.kt)("p",null,"This topic contains information about ksctl-cli commands, syntax, options, resource types, and a few examples of command usage."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"Use the following syntax to run the ksctl-cli tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl [command] [<command-arguments>] [command-options]\n")),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"The following table describes the syntax and descriptions for all the ksctl-cli commands."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operations"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cred"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl cred")),(0,l.kt)("td",{parentName:"tr",align:null},"Login with your Cloud-provider Credentials")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl create [options]")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a cluster of ha or cloud managed types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl delete [options]")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete a cluster of ha or cloud managed types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get-clusters"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl get-clusters [options]")),(0,l.kt)("td",{parentName:"tr",align:null},"Prints out all the clusters created via ksctl")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"switch-cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl switch-cluster [options]")),(0,l.kt)("td",{parentName:"tr",align:null},"Use to switch between clusters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl version")),(0,l.kt)("td",{parentName:"tr",align:null},"Prints out ksctl binary version")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The following are the ksctl-cli options."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Options"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"-h"),(0,l.kt)("td",{parentName:"tr",align:null},"It provides more information on the ksctl-cli.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--toggle"),(0,l.kt)("td",{parentName:"tr",align:null},"-t"),(0,l.kt)("td",{parentName:"tr",align:null},"Help message for toggle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--version"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"It is the version of the ",(0,l.kt)("inlineCode",{parentName:"td"},"ksctl-cli")," tool.")))),(0,l.kt)("admonition",{title:"NOTE",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The ksctl cli tool must have access to the clusters you want it to manage. To grant it access, set the KUBECONFIG environment variable to a path to the kubeconfig file containing the necessary keys to access those clusters. To set the KUBECONFIG environment variable, use these commands:"),(0,l.kt)("p",{parentName:"admonition"},"On Linux/macOS: ",(0,l.kt)("inlineCode",{parentName:"p"},'export KUBECONFIG="[path to kubeconfig file from the output of creation]"')),(0,l.kt)("p",{parentName:"admonition"},"On Windows: ",(0,l.kt)("inlineCode",{parentName:"p"},'$env:KUBECONFIG = "[path to kubeconfig file from the output of creation]"'))),(0,l.kt)("h2",{id:"register-credentials"},"Register Credentials"),(0,l.kt)("p",null,"Use this command to login in your selected cloud provider."),(0,l.kt)("h3",{id:"syntax-1"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ksctl cred\n")),(0,l.kt)("admonition",{title:"Note",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This command is used to configure the credentials for your selected cloud provider. It will prompt you to enter the authentication token or credentials specific to your provider.")),(0,l.kt)("p",null,"Further select your respected cloud-provider and copy the token or enter the required credentials when prompted by the command to complete the authentication process.\nAfter successful authentication, you should see a confirmation message."),(0,l.kt)("h3",{id:"example-output"},"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[LOG] Enter TOKEN\n    Enter Secret-> \n[SUCCESS] [secrets] configuration\n[SUCCESS] [ksctl] Credential added\n")),(0,l.kt)("p",null,"Now, ksctl is connected to your cloud provider account. You can proceed to create a cluster."),(0,l.kt)("h2",{id:"create-a-cluster"},"Create a Cluster"),(0,l.kt)("p",null,"Use this command to create a cluster. For example, use the create command to create a cluster in a respected cloud provider."),(0,l.kt)("h3",{id:"syntax-2"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ksctl create-cluster <cloud-provider> --name <cluster-name> --node <Number-of-nodes> --region <deafult-region> --nodeSize <Node-size>\n")),(0,l.kt)("h3",{id:"commands-1"},"Commands"),(0,l.kt)("p",null,"The following are the ",(0,l.kt)("inlineCode",{parentName:"p"},"ksctl create [command] [options]")," command."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a EKS cluster in AWS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"azure"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a AKS cluster in Azure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"civo"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a CIVO k3s cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ha-azure"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a HA k3s cluster in Azure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ha-civo"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a HA CIVO k3s cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a LOCAL cluster in Docker")))),(0,l.kt)("h3",{id:"options-1"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"options"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name string"),(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to name a Cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--noMP int"),(0,l.kt)("td",{parentName:"tr",align:null},"-N"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to defined Number of Nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region string"),(0,l.kt)("td",{parentName:"tr",align:null},"-r"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to specify the region")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nodeSizeMP string"),(0,l.kt)("td",{parentName:"tr",align:null},"-s"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to define the Node size  of managed cluster nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--apps string"),(0,l.kt)("td",{parentName:"tr",align:null},"-a"),(0,l.kt)("td",{parentName:"tr",align:null},"Used fot PreInstalled Apps with comma seperated string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--cni string"),(0,l.kt)("td",{parentName:"tr",align:null},"-c"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to Install CNI Plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"-h"),(0,l.kt)("td",{parentName:"tr",align:null},"It provides information on the create command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"To get a verbose output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--apps string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Provides with pre-Installed Applications")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl create civo --name demo-cluster --nodeSizeMP g4s.kube.medium --noMP 3 --region LON1 --apps argo-cd\n")),(0,l.kt)("h3",{id:"example-output-1"},"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[civo] Booted Instance demo-cluster-ksctl-managed\n[NOTE] KUBECONFIG env var\n[NOTE] export KUBECONFIG="/root/.ksctl/config/civo/managed/demo LON1/kubeconfig"\n\n[SUCCESS] [ksctl] created managed cluster\n')),(0,l.kt)("h2",{id:"delete-a-cluster"},"Delete a cluster"),(0,l.kt)("p",null,"Use this command to delete the cluster."),(0,l.kt)("h3",{id:"syntax-3"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl delete-cluster civo --name demo-cluster -r LON1\n")),(0,l.kt)("h3",{id:"options-2"},"Options"),(0,l.kt)("p",null,"The following are the ",(0,l.kt)("inlineCode",{parentName:"p"},"ksctl delete [cloud-provider] [options]")," command options."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name string"),(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region string"),(0,l.kt)("td",{parentName:"tr",align:null},"-r"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the region of the cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"-h"),(0,l.kt)("td",{parentName:"tr",align:null},"It provides information on the delete command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"It provides verbose output (default true)")))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl delete civo --name demo-cluster -r LON1\n")),(0,l.kt)("h3",{id:"example-output-2"},"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SUCCESS [ksctl] deleted managed cluster\n")),(0,l.kt)("h2",{id:"switch"},"Switch"),(0,l.kt)("p",null,"Use this command to swicth between clusters"),(0,l.kt)("h3",{id:"options-3"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Usge"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"-h"),(0,l.kt)("td",{parentName:"tr",align:null},"It provides help for switch cmd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name string"),(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to define Name of the Cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region string"),(0,l.kt)("td",{parentName:"tr",align:null},"-r"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the region of the cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--provider string"),(0,l.kt)("td",{parentName:"tr",align:null},"-p"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the cloud provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to get a verbose output")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl switch --provider civo --name demo-cluster --region LON1\n")),(0,l.kt)("h3",{id:"example-output-3"},"Example Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[NOTE] export KUBECONFIG="/root/.ksctl/config/civo/managed/demo-cluster LON1/kubeconfig"\n\n[SUCCESS] [ksctl] switched cluster\n')),(0,l.kt)("h2",{id:"get"},"Get"),(0,l.kt)("p",null,"Use to prints out all the clusters created via ksctl"),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kstcl get-cluster\n")),(0,l.kt)("h3",{id:"examples-output"},"Examples Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Name            Provider    Nodes  Type     K8s  \ndemo-cluster    civo(LON1)  wp: 3  managed  k3s \n[SUCCESS] [ksctl] get clusters\n")))}u.isMDXComponent=!0}}]);