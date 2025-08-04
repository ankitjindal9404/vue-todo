pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }

    tools {
        nodejs 'nodejs' // Name of your Jenkins nodejs tool (configure in Manage Jenkins > Global Tool Configuration)
    }

    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true
                }
            }
            steps {
                bat '''
                    npm ci
                    '''
            }
        }
        stage('Unit test') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true
                }
            }
            steps {
                bat '''
                    npm run test:unit
                    '''
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true
                }
            }
            steps {
                bat '''
                    npm run build
                    '''
            }
        }
        stage('E2E Test') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true
                }
            }
            steps {
                bat '''
                    npm run test:e2e
                    '''
            }
        }

        stage('Deploymeent') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true
                }
            }
            steps {
                bat '''
                    npm install -g vercel
                    vercel --prod --token=$VERCEL_TOKEN --confirm --name=cicdproject
                    '''
            }
        }
    }
}