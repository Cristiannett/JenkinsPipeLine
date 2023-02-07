pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    parameters {
        string(name: 'persona_a_saludar', defaultValue: '', description: 'Persona a saludar')
    }
    triggers {
        pollScm('H */4 * * 1-5')
    }
    stages {
        stage('Non-Parallel Stage') {
            steps {
                bat "node index.js ${params.persona_a_saludar}"
            }
        }
        stage('Parallel Stage') {
            failFast true
            parallel {
                stage('Branch A') {
                    agent any
                    steps {
                        bat "node index.js ${params.persona_a_saludar} desde la rama A"
                    }
                }
                stage('Branch B') {
                    agent any
                    steps {
                        bat "node index.js ${params.persona_a_saludar} desde la rama B"
                    }
                }
            }
        }
    }
}

