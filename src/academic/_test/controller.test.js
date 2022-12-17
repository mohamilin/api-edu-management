const {getAllAcademicYears} = require('../controller');

const ModelDatabase = require('../../../database/models');
const Model = ModelDatabase.sequelize.models;

describe('Describe Unit Test - Controller Academic', () => {

    test('should controller - getAllAcademicYears', async () => { 
        const params = {
            req: {},
            res: {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
            },
        };

        jest.spyOn(Model.academic_years, 'findAll').mockReturnValueOnce([])
        await getAllAcademicYears(params.req, params.res)
        expect(params.res.status).toBeCalledWith(200);
        expect(params.res.json).toBeCalledWith({data: [], success: true});
     })
 })