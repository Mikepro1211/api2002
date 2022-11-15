const { Router } = require('express');
const router = Router();
const CantanteInfo = require('../controllers/cantanteControlles');

//routes
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data);
});

//pendientes los controladores 
router.get('/api/list', CantanteInfo.list);
router.get('/api/list/:id',CantanteInfo.show);
router.post('/api/list',CantanteInfo.add);
router.put('/api/list/:id', CantanteInfo.update);
router.delete('/api/list/:id', CantanteInfo.delete);


module.exports = router;