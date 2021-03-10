export const get = (req, res) => {
    try {
        res.status(200).json({data: []});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

export const post = (req, res) => {
    const data = {};
    try {
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};
