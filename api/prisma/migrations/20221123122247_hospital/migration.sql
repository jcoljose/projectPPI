-- CreateTable
CREATE TABLE "paciente" (
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "dataDeNascimento" DATETIME NOT NULL,
    "sexo" TEXT NOT NULL,
    "altura" REAL,
    "peso" REAL,
    "dataCriado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "medico" (
    "crm" TEXT NOT NULL PRIMARY KEY,
    "telefone" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "dataDeNascimento" DATETIME NOT NULL,
    "especialidadeId" INTEGER NOT NULL,
    CONSTRAINT "medico_especialidadeId_fkey" FOREIGN KEY ("especialidadeId") REFERENCES "Especialidade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Especialidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "especialidade" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DiasAtendimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dias" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "HorariosAtendimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "horarios" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Calendario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diaMensal" INTEGER NOT NULL,
    "mesAnual" INTEGER NOT NULL,
    "diasAtendimentoId" INTEGER NOT NULL,
    "medicoCrm" TEXT NOT NULL,
    CONSTRAINT "Calendario_diasAtendimentoId_fkey" FOREIGN KEY ("diasAtendimentoId") REFERENCES "DiasAtendimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Calendario_medicoCrm_fkey" FOREIGN KEY ("medicoCrm") REFERENCES "medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "queixa" TEXT NOT NULL,
    "descricaoMedica" TEXT NOT NULL,
    "prescricaoMedica" TEXT NOT NULL,
    "dataCriado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "calendarioId" INTEGER NOT NULL,
    "medicoCrm" TEXT NOT NULL,
    "pacienteCpf" TEXT NOT NULL,
    CONSTRAINT "consulta_calendarioId_fkey" FOREIGN KEY ("calendarioId") REFERENCES "Calendario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "consulta_medicoCrm_fkey" FOREIGN KEY ("medicoCrm") REFERENCES "medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "consulta_pacienteCpf_fkey" FOREIGN KEY ("pacienteCpf") REFERENCES "paciente" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DiasAtendimentoToMedico" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_DiasAtendimentoToMedico_A_fkey" FOREIGN KEY ("A") REFERENCES "DiasAtendimento" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DiasAtendimentoToMedico_B_fkey" FOREIGN KEY ("B") REFERENCES "medico" ("crm") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_HorariosAtendimentoToMedico" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_HorariosAtendimentoToMedico_A_fkey" FOREIGN KEY ("A") REFERENCES "HorariosAtendimento" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HorariosAtendimentoToMedico_B_fkey" FOREIGN KEY ("B") REFERENCES "medico" ("crm") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CalendarioToHorariosAtendimento" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CalendarioToHorariosAtendimento_A_fkey" FOREIGN KEY ("A") REFERENCES "Calendario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CalendarioToHorariosAtendimento_B_fkey" FOREIGN KEY ("B") REFERENCES "HorariosAtendimento" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_DiasAtendimentoToMedico_AB_unique" ON "_DiasAtendimentoToMedico"("A", "B");

-- CreateIndex
CREATE INDEX "_DiasAtendimentoToMedico_B_index" ON "_DiasAtendimentoToMedico"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HorariosAtendimentoToMedico_AB_unique" ON "_HorariosAtendimentoToMedico"("A", "B");

-- CreateIndex
CREATE INDEX "_HorariosAtendimentoToMedico_B_index" ON "_HorariosAtendimentoToMedico"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CalendarioToHorariosAtendimento_AB_unique" ON "_CalendarioToHorariosAtendimento"("A", "B");

-- CreateIndex
CREATE INDEX "_CalendarioToHorariosAtendimento_B_index" ON "_CalendarioToHorariosAtendimento"("B");
