Kafka
=====

Kafka est le point d'entrée du pipeline. Il reçoit les messages
des producers et les met à disposition des consumers (Logstash).

Installation
------------

.. code-block:: bash

   docker run -d --name kafka \
     -p 9092:9092 \
     apache/kafka:latest

Créer un topic
--------------

.. code-block:: bash

   kafka-topics.sh --create \
     --topic logs-auth \
     --bootstrap-server localhost:9092 \
     --partitions 3 \
     --replication-factor 1

Vérifier les topics
-------------------

.. code-block:: bash

   kafka-topics.sh --list \
     --bootstrap-server localhost:9092

.. warning::
   En production, augmente le ``replication-factor`` à 3 minimum.
