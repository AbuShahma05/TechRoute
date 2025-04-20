import React from 'react'

const Project = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="text-2xl font-bold pt-3 ">4. Project</p>

            {/* project section */}
            <p className="text-lg font-bold pl-6 pt-3">
                Beginner Projects:
            </p>

            <div className="mt-3 ml-6">
                <button
                    className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj1" ? "bg-lime-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "proj1" ? null : "proj1")
                    }
                >
                    Basic CI/CD Pipeline
                </button>
                {activeSection === "proj1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: GitHub + GitHub Actions + Node.js/Python app
                            <br /> <br />
                            What you do:
                            <br />
                            Automate build/test/deploy steps
                            <br />
                            Send success/failure notifications (Slack/Email)
                            <br /> <br />
                            Skills Gained:
                            <br />
                            CI/CD basics, YAML syntax, GitHub Actions workflow
                            <br />
                        </p>
                    </div>
                )}
            </div>

            {/* 2nd beginer */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-lime-400 h-14 w-80 rounded-xl font-semibold text-lg  cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj2" ? "bg-lime-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "proj2" ? null : "proj2")
                    }
                >
                    Dockerize a Simple Web App
                </button>
                {activeSection === "proj2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: Docker + Node.js or Flask + Docker Hub
                            <br /> <br />
                            What you do:
                            <br />
                            Create Dockerfile and docker-compose
                            <br />
                            Push image to Docker Hub
                            <br />
                            Run container locally
                            <br /> <br />
                            Skills Gained:
                            <br />
                            Containerization, Docker CLI, Docker networking
                            <br />
                            <br />
                        </p>
                    </div>
                )}
            </div>

            {/* 3rd beginer */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-lime-400 h-14 w-80 rounded-xl  font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "proj3" ? "bg-lime-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "proj3" ? null : "proj3")
                    }
                >
                    Deploy Static Website on AWS S3 + CloudFront
                </button>
                {activeSection === "proj3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: AWS S3 + CloudFront + Route53 (Optional)
                            <br /> <br />
                            What you do:
                            <br />
                            Upload static HTML/CSS/JS to S3
                            <br />
                            Use CloudFront for global CDN
                            <br /> <br />
                            Skills Gained:
                            <br />
                            S3 hosting, versioning, CloudFront configuration
                        </p>
                    </div>
                )}
            </div>

            {/* intermediate */}
            <p className="text-lg font-bold pl-6 pt-5">
                Intermediate Projects:
            </p>

            {/* intermediate first project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projint1" ? "bg-teal-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projint1" ? null : "projint1")
                    }
                >
                    CI/CD Pipeline
                </button>
                {activeSection === "projint1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: Jenkins + Docker + GitHub + Bash
                            <br /> <br />
                            What you do:
                            <br />
                            Install Jenkins on a VM
                            <br />
                            Set up freestyle or pipeline job to pull repo, test, build Docker image, and deploy
                            <br /> <br />
                            Skills Gained:
                            <br />
                            Jenkins pipelines, Docker integration, webhook triggers
                        </p>
                    </div>
                )}
            </div>

            {/* intermediate 2nd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projint2" ? "bg-teal-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projint2" ? null : "projint2")
                    }
                >
                    Terraform AWS Infrastructure
                </button>
                {activeSection === "projint2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: Terraform + AWS EC2, VPC, S3, IAM
                            <br /> <br />
                            What you do:
                            <br />
                            Define infrastructure as code
                            <br />
                            Provision EC2, configure security groups, IAM roles
                            <br /> <br />
                            Skills Gained:
                            <br />
                            IaC concepts, Terraform HCL, cloud provisioning
                        </p>
                    </div>
                )}
            </div>

            {/* intermediate 3rd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-teal-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projint3" ? "bg-teal-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projint3" ? null : "projint3")
                    }
                >
                    Kubernetes Deployment of Microservices
                </button>
                {activeSection === "projint3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: Kubernetes (Minikube/EKS) + Docker + NGINX
                            <br /> <br />
                            What you do:
                            <br />
                            Deploy multi-container app with Ingress
                            <br />
                            Use ConfigMaps & Secrets
                            <br /> <br />
                            Skills Gained:
                            <br />
                            Pods, Services, Deployments, Ingress controllers
                        </p>
                    </div>
                )}
            </div>

            {/* intermediate 4th project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-teal-400 h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projint4" ? "bg-teal-900" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projint4" ? null : "projint4")
                    }
                >
                    Centralized Logging System
                </button>
                {activeSection === "projint4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: Elasticsearch + Logstash + Kibana + Filebeat
                            <br /> <br />
                            What you do:
                            <br />
                            Collect logs from web app or servers
                            <br />
                            Visualize in Kibana dashboard
                            <br /> <br />
                            Skills Gained:
                            <br />
                            Log shipping, parsing, dashboard creation
                        </p>
                    </div>
                )}
            </div>

            {/* advanced */}
            <p className="text-lg font-bold pl-6 pt-5">
                Advanced Projects:
            </p>

            {/* advanced 1st project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projadvnd1" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd1" ? null : "projadvnd1")
                    }
                >
                    Complete CI/CD Pipeline
                </button>
                {activeSection === "projadvnd1" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: GitHub Actions + Docker + Kubernetes (EKS) + Helm
                            <br /> <br />
                            What you do:
                            <br />
                            Set up GitOps workflow using GitHub Actions
                            <br />
                            Use Helm for deployment templating
                            <br /> <br />
                            Skills Gained:
                            <br />
                            Advanced CI/CD, GitOps, Helm templating
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 2nd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80  rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projadvnd2" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd2" ? null : "projadvnd2")
                    }
                >
                    Highly Available Infrastructure

                </button>
                {activeSection === "projadvnd2" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: Terraform + AWS (ALB, ASG, RDS, VPC)
                            <br /> <br />
                            What you do:
                            <br />
                            Launch web app across multiple availability zones
                            <br />
                            Load balanced, auto-scaled, and monitored
                            <br /> <br />
                            Skills Gained:
                            <br />
                            HA architecture, AWS services, Terraform modules
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 3rd project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none ${activeSection === "projadvnd3" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd3" ? null : "projadvnd3")
                    }
                >
                    Monitoring Stack with Prometheus
                </button>
                {activeSection === "projadvnd3" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: Prometheus + Grafana + Alertmanager + Node Exporter
                            <br /> <br />
                            What you do:
                            <br />
                            Monitor app/server performance, CPU, memory
                            <br />
                            Set up alerts and visual dashboards
                            <br /> <br />
                            Skills Gained:
                            <br />
                            Metrics monitoring, alerting, Grafana dashboards
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 4th project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none 
            ${activeSection === "projadvnd4" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd4" ? null : "projadvnd4")
                    }
                >
                    Secure Kubernetes with RBAC
                </button>
                {activeSection === "projadvnd4" && (
                    <div className="bg-gray-800 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: Kubernetes + Vault + Network Policies + RBAC <br />
                            <br />
                            What you do:
                            <br />
                            Use Kubernetes RBAC to restrict user access
                            <br />
                            Secure secrets using Vault
                            <br /> <br />
                            Skills Gained:
                            <br />
                            Kubernetes security, secrets management
                        </p>
                    </div>
                )}
            </div>

            {/* advanced 5th project name */}
            <div className="mt-3 ml-6">
                <button
                    className={`bg-emerald-400 h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none 
            ${activeSection === "projadvnd5" ? "bg-emerald-800" : ""
                        }`}
                    onClick={() =>
                        setActiveSection(activeSection === "projadvnd5" ? null : "projadvnd5")
                    }
                >
                    GitOps Project with ArgoCD and Kubernetes
                </button>
                {activeSection === "projadvnd5" && (
                    <div className="bg-red-900 rounded-xl w-96 shadow-md mt-3 p-4">
                        <p className="text-white font-semibold">
                            Stack: ArgoCD + Kubernetes + GitHub
                            <br /> <br />
                            What you do:
                            <br />
                            Manage app deployment directly from Git repo
                            <br />
                            Auto-sync changes, rollback, monitor health
                            <br /> <br />
                            Skills Gained:
                            <br />
                            GitOps, ArgoCD app management, declarative configs
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
