const inquilino = (sequelize, DataTypes) =>{
    const Inqulino = sequelize.define('Inquilino', {
        Nome: {
            type: DataTypes . STRING
        },
        EMAIL: {
            type: DataTypes . STRING
        }
        Telefone: {
            type: DataTypes . FLOAT
        },
        Idade: {
            type: DataTypes . FLOAT
        },
        Cidade: {
            type: DataTypes . STRING
        },
        Nome: {
            type: DataTypes . STRING
        },
        Tipo de moradia: {
            type: DataTypes . STRING
        },
        Trabalha: {
            type: DataTypes . STRING
        },
        Estuda: {
            type: DataTypes . STRING
        },
        Quantidade de pessoas: {
            type: DataTypes . STRING
        },
        Senha: {
            type: DataTypes . STRING
        },
        Confirmar Senha: {
            type: DataTypes . STRING
        }
    } , {
        tableName: 'Inquilino'
    }}

    return Inquilino
}

     module.exports = Inquilino



     