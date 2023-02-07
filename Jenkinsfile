pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    parameters {
        string(name: 'persona_a_saludar', defaultValue: '', description: 'Persona a saludar')
    }
    stage {
        failFast true
            parallel {
                stage('Branch A') {
                    agent {
                        label 'for-branch-a'
                    }
                    steps {
                        bat "node index.js ${params.persona_a_saludar} desde la rama A"
                    }
                }
                stage('Branch B') {
                    agent {
                        label 'for-branch-b'
                    }
                    steps {
                        bat "node index.js ${params.persona_a_saludar} desde la rama B"
                    }
                }
            }
    }
}
