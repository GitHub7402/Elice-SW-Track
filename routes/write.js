const { Router } = require('express');
const router = Router();
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile('write.html', { root: path.join(__dirname, '../public') });
});

//router.post("/", );
//글 추가
//router.delete("/", );
//글 삭제

module.exports = router;