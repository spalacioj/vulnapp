const handleContact = (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Received contact from ${name} (${email}): ${message}`);

    
    res.status(200).send({ message: "Contact form submitted successfully!"});
};

module.exports = { handleContact };
