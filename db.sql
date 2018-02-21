
--
-- `t_livre`
--

CREATE TABLE `t_livre` (
  `idLivre` int(10) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `annee` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `t_livre` (`idLivre`, `titre`, `auteur`, `annee`) VALUES
(1, 'langageC', 'auteur1', 1984),
(2, 'langageJava', 'auteur2', 1984),
(3, 'langageR', 'auteur3', 1984),
(4, 'langageCamel', 'auteur4', 1984),
(6, 'langageC++', 'Thordedal', 1970),


ALTER TABLE `t_livre`
  ADD PRIMARY KEY (`idLivre`);

ALTER TABLE `t_livre`
  MODIFY `idLivre` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;