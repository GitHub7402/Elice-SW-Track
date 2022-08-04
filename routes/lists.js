const { Router } = require('express');
const router = Router();
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile('lists.html', { root: path.join(__dirname, '../public') });
});

//router.get("/api", );
//글리스트 가져오기.

module.exports = router;