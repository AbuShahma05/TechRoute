import React from 'react'

const Skills = ({ activeSection, setActiveSection }) => {
    return (
        <div>
            <p className="font-bold text-2xl pt-4">2. Intermediate Level:</p>

            {/* Buttons & Content in Column */}
            <div className="mt-4 flex flex-col space-y-4 pl-6">


                {/* operating system and servers */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "operatingsystemandservers" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "operatingsystemandservers" ? null : "operatingsystemandservers"
                            )
                        }
                    >
                        Operating Systems and Servers
                    </button>
                    {activeSection === "operatingsystemandservers" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                In-depth Linux
                                <br />
                                Package managers, systemd, cron jobs
                                <br />
                                System monitoring: top, htop, journalctl, etc.
                            </p>
                        </div>
                    )}
                </div>


                {/*  containers and container orchestration */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "container" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "container" ? null : "container"
                            )
                        }
                    >
                        Containers and Container Orchestration
                    </button>
                    {activeSection === "container" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Docker:
                                Images, volumes, networks, Dockerfile
                                <br />
                                Kubernetes:
                                Pods, Deployments, Services, ConfigMaps, Helm basics
                            </p>
                        </div>
                    )}
                </div>

                {/*  ci/cd pipelines */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "ci/cd" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "ci/cd" ? null : "ci/cd"
                            )
                        }
                    >
                        CI/CD Pipelines
                    </button>
                    {activeSection === "ci/cd" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Tools: Jenkins, GitHub Actions, GitLab CI/CD, CircleCI
                                <br />
                                Build pipelines: Lint → Build → Test → Deploy
                            </p>
                        </div>
                    )}
                </div>

                {/* infrastructure as code */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "infracode" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "infracode" ? null : "infracode"
                            )
                        }
                    >
                        Infrastructure as Code (IaC)
                    </button>
                    {activeSection === "infracode" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Terraform or Pulumi
                                <br />
                                Define and provision infrastructure (AWS, Azure, GCP)
                                <br />
                                Basics of CloudFormation (if using AWS)
                            </p>
                        </div>
                    )}
                </div>

                {/* configuration management */}
                <div>
                    <button
                        className={`bg-cyan-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "confmanagmnt" ? "bg-cyan-700" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "confmanagmnt" ? null : "confmanagmnt"
                            )
                        }
                    >
                        Configuration Management
                    </button>
                    {activeSection === "confmanagmnt" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Ansible or Chef/Puppet
                                <br />
                                Automate server setup and app configuration
                                <br />
                            </p>
                        </div>
                    )}
                </div>
            </div>



            {/* 2nd para */}
            <p className="font-bold text-2xl pt-4">
                3.  Advanced Level:
            </p>
            <div className="mt-6 flex-col space-y-5 pl-6">
                {/* cloud providers */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "cldprovdr" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "cldprovdr" ? null : "cldprovdr"
                            )
                        }
                    >
                        Cloud Providers
                    </button>
                    {activeSection === "cldprovdr" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                AWS (preferred) / Azure / GCP
                                <br />
                                Learn core services:
                                <br />
                                EC2, S3, RDS, Lambda, VPC, IAM, EKS/ECS
                            </p>
                        </div>
                    )}
                </div>

                {/* loggin and monitoring */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "lgnmntrng" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "lgnmntrng"
                                    ? null
                                    : "lgnmntrng"
                            )
                        }
                    >
                        Logging and Monitoring
                    </button>
                    {activeSection === "lgnmntrng" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Tools: Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), Datadog
                                <br />
                                Set up alerts and dashboards
                            </p>
                        </div>
                    )}
                </div>

                {/* advanced kubernertes */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "advncdkbrnts" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "advncdkbrnts"
                                    ? null
                                    : "advncdkbrnts"
                            )
                        }
                    >
                        Advanced Kubernetes
                    </button>
                    {activeSection === "advncdkbrnts" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Helm Charts
                                <br />
                                Ingress Controllers
                                <br />
                                Autoscaling, resource limits
                                <br />
                                Service Mesh: Istio or Linkerd
                            </p>
                        </div>
                    )}
                </div>

                {/* security in devops */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "secdev" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "secdev"
                                    ? null
                                    : "secdev"
                            )
                        }
                    >
                        Security in DevOps
                    </button>
                    {activeSection === "secdev" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Secrets management: Vault, AWS Secrets Manager
                                <br />
                                SSL, HTTPS, IAM roles/policies
                                <br />
                                Autoscaling, resource limits
                                <br />
                                Static code analysis, SAST/DAST tools
                            </p>
                        </div>
                    )}
                </div>

                {/* site reliability engineering */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "sre" ? "bg-indigo-900" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "sre"
                                    ? null
                                    : "sre"
                            )
                        }
                    >
                        Site Reliability Engineering
                    </button>
                    {activeSection === "sre" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                SLAs, SLOs, SLIs
                                <br />
                                Chaos Engineering (using tools like Gremlin)
                                <br />
                                Incident response and postmortems
                            </p>
                        </div>
                    )}
                </div>

                {/* bonus skills */}
                <div>
                    <button
                        className={`bg-indigo-400 text-black h-14 w-80 rounded-xl font-semibold text-lg cursor-pointer transition-all hover:scale-110 focus:outline-none
          ${activeSection === "bnskls" ? "bg-indigo-600" : ""}`}
                        onClick={() =>
                            setActiveSection(
                                activeSection === "bnskls"
                                    ? null
                                    : "bnskls"
                            )
                        }
                    >
                        Bonus Skills
                    </button>
                    {activeSection === "bnskls" && (
                        <div className="mt-2 p-4 bg-gray-800 w-96 rounded-lg shadow-md">
                            <p className="text-white font-semibold">
                                Kafka, RabbitMQ (for event-driven systems)
                                <br />
                                ArgoCD (GitOps)
                                <br />
                                NGINX/Apache configuration
                                <br />
                                Custom Helm charts
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills
