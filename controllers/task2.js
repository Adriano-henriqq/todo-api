import { db } from "../db/db2.js";

export const getTasks = (_, res) => {
    const query = "SELECT * FROM listaTarefas";

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
}

export const addTask = (req, res) => {
    const query = "INSERT INTO listaTarefas(`texto`, `title`, `subtitle`, `criado_em`, `criado_por`,`prioridade`, `concluido`) VALUES(?)";
    const values = [
        req.body.texto,
        req.body.title,
        req.body.subtitle,
        req.body.criado_em,
        req.body.criado_por,
        req.body.prioridade,
        req.body.concluido
    ]
    db.query(query, [values], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('Tarefa cadastrada com sucesso!');
    })
}

export const updateTask = (req, res) => {
    const query = "UPDATE listaTarefas SET `concluido` = ? WHERE `id` = ?";
    const values = [
        req.body.concluido,  
        req.params.id        
    ];

    db.query(query, [...values], (err, result) => {
        if (err) {
            console.error("Erro ao atualizar a tarefa:", err);
            return res.status(500).json(err);
        }

        return res.status(200).json("Tarefa alterada com sucesso!");
    });
};


export const deleteTask = (req, res) => {
    const query = "DELETE FROM listaTarefas WHERE `id` = ?";


    db.query(query,[req.params.id], (err)=> {
        if (err) return res.json(err);

        return res.status(200).json("Tarefa removida com sucesso!");
    })
}