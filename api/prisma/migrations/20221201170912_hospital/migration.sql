-- CreateTable
CREATE TABLE `paciente` (
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `nomeCompleto` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `dataDeNascimento` DATETIME(3) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `altura` DOUBLE NULL,
    `peso` DOUBLE NULL,
    `dataCriado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medico` (
    `crm` VARCHAR(191) NOT NULL,
    `nomeCompleto` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `dataDeNascimento` DATETIME(3) NOT NULL,
    `especialidadeId` INTEGER NOT NULL,

    PRIMARY KEY (`crm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `especialidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `especialidade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `diaAtendimento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dias` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horarioAtendimento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `horarios` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consulta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `queixa` VARCHAR(191) NOT NULL,
    `pacienteCpf` VARCHAR(191) NOT NULL,
    `medicoCrm` VARCHAR(191) NOT NULL,
    `descricaoMedica` VARCHAR(191) NOT NULL,
    `prescricaoMedica` VARCHAR(191) NOT NULL,
    `dataConsulta` DATETIME(3) NOT NULL,
    `dataCriado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DiasAtendimentoToMedico` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DiasAtendimentoToMedico_AB_unique`(`A`, `B`),
    INDEX `_DiasAtendimentoToMedico_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HorariosAtendimentoToMedico` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_HorariosAtendimentoToMedico_AB_unique`(`A`, `B`),
    INDEX `_HorariosAtendimentoToMedico_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `medico` ADD CONSTRAINT `medico_especialidadeId_fkey` FOREIGN KEY (`especialidadeId`) REFERENCES `especialidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consulta` ADD CONSTRAINT `consulta_pacienteCpf_fkey` FOREIGN KEY (`pacienteCpf`) REFERENCES `paciente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consulta` ADD CONSTRAINT `consulta_medicoCrm_fkey` FOREIGN KEY (`medicoCrm`) REFERENCES `medico`(`crm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DiasAtendimentoToMedico` ADD CONSTRAINT `_DiasAtendimentoToMedico_A_fkey` FOREIGN KEY (`A`) REFERENCES `diaAtendimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DiasAtendimentoToMedico` ADD CONSTRAINT `_DiasAtendimentoToMedico_B_fkey` FOREIGN KEY (`B`) REFERENCES `medico`(`crm`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HorariosAtendimentoToMedico` ADD CONSTRAINT `_HorariosAtendimentoToMedico_A_fkey` FOREIGN KEY (`A`) REFERENCES `horarioAtendimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HorariosAtendimentoToMedico` ADD CONSTRAINT `_HorariosAtendimentoToMedico_B_fkey` FOREIGN KEY (`B`) REFERENCES `medico`(`crm`) ON DELETE CASCADE ON UPDATE CASCADE;
