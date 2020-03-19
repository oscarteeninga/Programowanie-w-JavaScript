let newelement = "understand";
let newtranslation = "rozumieć";

describe('Tests', function () {
    it('Add element', function () {
        writed = newelement;
        addTranslation();
        expect(dictionary.get(writed).length).to.equal(0);
    });
    it('Add translation', function () {
        writed = newelement + ":" + newtranslation;
        addTranslation();
        expect(dictionary.get(newelement)[0]).to.equal(newtranslation);
    });
    it('Print translation', function () {
        writed = newelement;
        printTranslation();
        expect(dictionary.get(newelement)[0]);
    });
    it('Delete element', function () {
        writed = newelement;
        del();
        expect(dictionary.get(writed).length).to.equal(0);
        writed = "";
    });
});
