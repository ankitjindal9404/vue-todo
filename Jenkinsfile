pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Name of your Jenkins nodejs tool (configure in Manage Jenkins > Global Tool Configuration)
    }

    stages {
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
    }
}