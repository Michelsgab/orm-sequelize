module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Daniel Boss",
          ativo: true,
          email: "daniel@boss.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),  
        },
        {
          nome: "George Curioso",
          ativo: true,
          email: "george@curioso.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Allef React",
          ativo: true,
          email: "allef@react.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Victor Frango",
          ativo: true,
          email: "victor@frango.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Fabrício Senior",
          ativo: true,
          email: "fabricio@senior.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Eduardo Edu",
          ativo: true,
          email: "eduardo@edu.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pessoas", null, {});
  },
};
