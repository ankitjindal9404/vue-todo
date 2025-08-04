pipeline {
    agent any

    tools {
        nodejs 'nodejs18' // Name of your Jenkins nodejs tool (configure in Manage Jenkins > Global Tool Configuration)
    }

    stages {
        stage('Install') {
            steps {
                sh '''
                    npm ci
                    '''
            }
        }
        stage('Unit test') {
            steps {
                sh '''
                    npm run test:unit
                    '''
            }
        }
        stage('Build') {
            steps {
                sh '''
                    npm run build
                    '''
            }
        }
        stage('E2E Test') {
            steps {
                sh '''
                    npm run test:e2e
                    '''
            }
        }
    }
    post {
    always {
      junit 'coverage/*.xml' // if you configure test coverage
      cleanWs()
    }
  }


}