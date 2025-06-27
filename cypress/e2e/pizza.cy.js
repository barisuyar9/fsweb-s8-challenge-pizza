describe('Pizza Sipariş Formu', () => { // test senaryosunu gruplamak için kullanılır.
  beforeEach(() => {
    cy.visit('http://localhost:5173/order'); // Her it(...) testinden önce çalışacak kod bloğu. cy.visit(...): Tarayıcıyı belirtilen URL'ye götürür Yani her test öncesinde /order sayfası (sipariş formu) açılır.
  });

  // TEST-1

  it('İsim inputuna metin girilebilmeli', () => { // Bu test, isim alanına yazı yazılabiliyor mu kontrol eder.
    cy.get('input[type="text"]') // cy.get(...): DOM'da input[type="text"] olan elemanı seçer.
      .type('Barış Uyar') // .type(...): Inputa "Barış Uyar" yazısını yazar.
      .should('have.value', 'Barış Uyar'); // .should(...): Inputun değeri gerçekten "Barış Uyar" olmuş mu kontrol eder (assertion).
  });

  // TEST-2

  it('Birden fazla malzeme seçilebilmeli', () => {
    cy.get('input[type="checkbox"]').check(['Domates', 'Biber', 'Mantar', 'Zeytin']); // cy.get('input[type="checkbox"]'): Sayfadaki tüm checkbox’ları seçer. .check([...]): Dizi içindeki malzemeleri işaretler (tıklar).

    // Her malzeme için should('be.checked') ile seçili olduğundan emin olunur.
    cy.get('input[type="checkbox"][value="Domates"]').should('be.checked');
    cy.get('input[type="checkbox"][value="Biber"]').should('be.checked');
    cy.get('input[type="checkbox"][value="Mantar"]').should('be.checked');
    cy.get('input[type="checkbox"][value="Zeytin"]').should('be.checked');
  });

  // TEST-3

  it('Formu doldurup başarılı şekilde gönderebilmeli', () => {
    cy.get('input[type="text"]').type('Barış Uyar').should('have.value', 'Barış Uyar'); // İsim inputu dolduruluyor, ardından doğru değer girildiği test ediliyor.

    cy.get('input[type="radio"][value="orta"]').check().should('be.checked'); // orta boyutundaki radio buton işaretleniyor.

    cy.get('input[type="checkbox"]').check(['Domates', 'Biber', 'Mantar', 'Zeytin']); // Dört adet malzeme işaretleniyor (formun geçerli olması için gerekli minimum).

    cy.get('textarea').type('Ekstra sos istiyorum').should('have.value', 'Ekstra sos istiyorum'); // Notlar alanına yazı giriliyor ve yazının doğru şekilde girildiği kontrol ediliyor.

    cy.get('button[type="submit"]').click(); // Formdaki "Sipariş Ver" butonuna tıklanıyor ve form gönderiliyor.

    // Başarılı yönlendirmeyi kontrol et
    cy.url().should('include', '/success');
  });
});
