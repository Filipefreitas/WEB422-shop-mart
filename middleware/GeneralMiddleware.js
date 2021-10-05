exports.testId = (req, res, next)=>
{
    const idLength = '24';

    if(req.params.id.length != idLength)
    {
        res.json({
            message: "Error while fetching data. Invalid Id length"
        })
    }
    else
    {
        next();
    }
}