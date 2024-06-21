import { db } from "../db/db2.js";

export const getHistory = (_,res)=>{
    const query = "SELECT * FROM pomodoros";

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
}

export const addStarted = (req, res) => {
    const query = "INSERT INTO pomodoros (`started`) VALUES (?)"
    const values = [
        req.body.started,
    ]
    db.query(query, [values], (err)=>{
        if (err) return res.json(err);
        return res.status(200).json('ação cadastrada com sucesso!');
    })
};


export const updatePause = (req, res) => {
    const query = "UPDATE pomodoros SET `paused` = ? WHERE `id` = ?";
    const values = [
        req.body.paused,  
        req.params.id        
    ];

    db.query(query, [...values], (err, result) => {
        if (err) {
            console.error("Erro ao atualizar a acao pause:", err);
            return res.status(500).json(err);
        }

        return res.status(200).json("pause acao alterada com sucesso!");
    });
};
export const updateReset = (req, res) => {
    const query = "UPDATE pomodoros SET `reset` = ? WHERE `id` = ?";
    const values = [
        req.body.reset,  
        req.params.id        
    ];

    db.query(query, [...values], (err, result) => {
        if (err) {
            console.error("Erro ao atualizar a acao reset:", err);
            return res.status(500).json(err);
        }

        return res.status(200).json("reset acao alterada com sucesso!");
    });
};
export const updateRestarted = (req, res) => {
    const query = "UPDATE pomodoros SET `restarted` = ? WHERE `id` = ?";
    const values = [
        req.body.restarted,  
        req.params.id        
    ];

    db.query(query, [...values], (err, result) => {
        if (err) {
            console.error("Erro ao atualizar a acao restarted:", err);
            return res.status(500).json(err);
        }

        return res.status(200).json("restarted acao alterada com sucesso!");
    });
};
export const updateFinished = (req, res) => {
    const query = "UPDATE pomodoros SET `finished` = ? WHERE `id` = ?";
    const values = [
        req.body.finished,  
        req.params.id        
    ];

    db.query(query, [...values], (err, result) => {
        if (err) {
            console.error("Erro ao atualizar a acao finished:", err);
            return res.status(500).json(err);
        }

        return res.status(200).json("finished acao alterada com sucesso!");
    });
};

export const deleteHistory = (req, res) => {
    const query = "DELETE FROM pomodoros WHERE `id` = ?";


    db.query(query,[req.params.id], (err)=> {
        if (err) return res.json(err);

        return res.status(200).json("pomodoro removido com sucesso!");
    })
}