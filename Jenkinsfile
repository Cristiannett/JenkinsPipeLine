pipeline {
    agent any
    parameters {
        string(name: 'persona_a_saludar', defaultValue: '', description: 'Persona a saludar')
    }
    stages {
        stage('execution') {
            steps {
                bat "echo \"const persona_a_saludar = '${params.persona_a_saludar}';\" > index.js"
            }
        }
    }
}
