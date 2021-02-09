<<<<<<< HEAD
![microservices-proof](https://www.github.com/jgillespie0715/microservice-proof/blob/media/title-image.png?raw=true)

# microservices-proof

- A demonstration microservices application for [Allok8](https://github.com/oslabs-beta/Allok8)

## Usage

**Minikube Installation**

- [Install minikube](https://minikube.sigs.k8s.io/docs/start/)

**Minikube Start**

- start minikube

`minikube start --driver=hyperkit`

**Minikube Start for test with applications that use ingress-nginx**

`minikube start`

`minikube addons enable ingress`

![minikube start --driver=hyperkit](https://www.github.com/jgillespie0715/microservice-proof/blob/media/minikube-ingress-start.png?raw=true)
![minikube addons enable ingress](https://www.github.com/jgillespie0715/microservice-proof/blob/media/minikube-start-ingress2.png?raw=true)
Note for Minikube Users and the Docker Driver

Recent versions of Minikube will use the docker driver by default when you run minikube start. On Windows or macOS, the docker driver is not compatible with an ingress, which we will be using throughout the course.

https://minikube.sigs.k8s.io/docs/drivers/docker/#known-issues

https://github.com/kubernetes/minikube/issues/7332

To avoid this issue, you can pass the `--driver` flag with a specific driver or `--vm=true`

macOS

`minikube start --vm=true`

or

`minikube start --driver=hyperkit`

or

`minikube start --driver=virtualbox`

Windows:

`minikube start --vm=true`

or

`minikube start --driver=hyperv`

or

`minikube start --driver=virtualbox`

- if using virtual box there is a known installation error

https://github.com/kubernetes/minikube/issues/7332

- here is a workaround
  ![virtualbox workaroud](https://www.github.com/jgillespie0715/microservice-proof/blob/media/virtualbox.png?raw=true)

**Deployment**

- In microservices-proof directory, deploy infra/k8s

`kubectl apply -f infra/k8s`

- verify running pods and services

`kubectl get pods -A`

`kubectl get svc -A`

## Technologies

- [Axios](https://github.com/axios/axios)
- [Docker](https://github.com/docker/cli)
- [Express](https://github.com/expressjs/express)
- [Kubernetes](https://github.com/kubernetes/kubernetes)
- [Node](https://github.com/nodejs/node)
- [React](https://github.com/facebook/react)
- [Skaffold](https://github.com/GoogleContainerTools/skaffold)
- [Webpack](https://github.com/webpack/webpack)

## Contribute

For major changes, please open an issue first to discuss what you would like to change, pull requests are welcome. Thank you!

- Justin Gillespie - [jgillespie0715](https://github.com/jgillespie0715)
=======
# microservice-proof
A microservices proof of concept app for Allok8 testing. NOT PRODUCTION GRADE.
>>>>>>> ebb41610f49137d9105dfafe4c6db75b17f1ea4f
