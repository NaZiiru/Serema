Architecture
============

Vue d'ensemble
--------------

Le pipeline de données suit ce flux ::

   [Producers] → [Kafka] → [Logstash] → [Elasticsearch] → [Kibana]

Composants
----------

.. list-table:: Rôle de chaque composant
   :widths: 20 40 40
   :header-rows: 1

   * - Composant
     - Rôle
     - Port par défaut
   * - Kafka
     - Transport et buffer de messages
     - 9092
   * - Logstash
     - Transformation des données
     - 5044
   * - Elasticsearch
     - Stockage et indexation
     - 9200
   * - Kibana
     - Visualisation
     - 5601
