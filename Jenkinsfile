pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    parameters {
        string(name: 'persona_a_saludar', defaultValue: '', description: 'Persona a saludar')
    }
    stages {
        stage('execution') {
            steps {
                bat 'node index.js ${params.persona_a_saludar}'
            }
        }
    }
}
