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
            steps {
                bat '''
                    npm ci
                    '''
            }
        }
        stage('Unit test') {
            steps {
                bat '''
                    npm run test:unit
                    '''
            }
        }
        stage('Build') {
            steps {
                bat '''
                    npm run build
                    '''
            }
        }
        stage('E2E Test') {
            steps {
                bat '''
                    npm run test:e2e
                    '''
            }
        }

        stage('Deploymeent') {
            steps {
                bat '''
                    npm install vercel
                    npx vercel --prod --token=$VERCEL_TOKEN --confirm --name=cicdproject
                    '''
            }
        }
    }
}