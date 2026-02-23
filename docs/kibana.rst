Kibana
======

Kibana permet de visualiser les données stockées dans Elasticsearch.

Accès
-----

Ouvre le navigateur sur : http://localhost:5601

Créer une Data View
-------------------

1. Aller dans **Stack Management → Data Views**
2. Cliquer sur **Create data view**
3. Saisir le pattern : ``logs-*``
4. Sélectionner ``@timestamp`` comme champ temporel
5. Cliquer sur **Save**

Créer un Dashboard
------------------

1. Aller dans **Dashboards → Create dashboard**
2. Cliquer sur **Create visualization**
3. Choisir le type : **Bar chart**, **Line**, **Pie**, etc.
4. Sélectionner la Data View ``logs-*``
5. Glisser les champs souhaités

.. tip::
   Utilise **Discover** pour explorer les logs bruts avant
   de créer des visualisations.
