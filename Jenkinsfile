pipeline {
    agent any
    parameters {
        string(name: 'persona_a_saludar', defaultValue: '', description: 'Persona a saludar')
    }
    stages {
        stage('execution') {
            steps {
                bat 'npm index.js ${params.persona_a_saludar}'
            }
        }
    }
}
