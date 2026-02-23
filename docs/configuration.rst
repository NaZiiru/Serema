Configuration
=============

Docker Compose complet
----------------------

Crée un fichier ``docker-compose.yml`` à la racine du projet :

.. code-block:: yaml

   version: '3.8'

   services:

     zookeeper:
       image: confluentinc/cp-zookeeper:latest
       environment:
         ZOOKEEPER_CLIENT_PORT: 2181

     kafka:
       image: confluentinc/cp-kafka:latest
       depends_on:
         - zookeeper
       ports:
         - "9092:9092"
       environment:
         KAFKA_BROKER_ID: 1
         KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
         KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092

     elasticsearch:
       image: elasticsearch:8.12.0
       ports:
         - "9200:9200"
       environment:
         - discovery.type=single-node
         - xpack.security.enabled=false

     logstash:
       image: logstash:8.12.0
       volumes:
         - ./pipeline:/usr/share/logstash/pipeline
       depends_on:
         - kafka
         - elasticsearch

     kibana:
       image: kibana:8.12.0
       ports:
         - "5601:5601"
       depends_on:
         - elasticsearch
       environment:
         ELASTICSEARCH_HOSTS: http://elasticsearch:9200

Démarrer le pipeline
--------------------

.. code-block:: bash

   docker-compose up -d

Vérifier que tout fonctionne
----------------------------

.. code-block:: bash

   # Kafka
   docker logs kafka

   # Elasticsearch
   curl localhost:9200/_cluster/health?pretty

   # Kibana
   open http://localhost:5601

.. note::
   Attends 30 secondes après le démarrage avant d'accéder à Kibana.
