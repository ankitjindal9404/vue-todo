pipeline {
    agent any

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