Elasticsearch
=============

Elasticsearch stocke et indexe les documents envoyés par Logstash.

Vérifier le statut
------------------

.. code-block:: bash

   curl -X GET "localhost:9200/_cluster/health?pretty"

Lister les index
----------------

.. code-block:: bash

   curl -X GET "localhost:9200/_cat/indices?v"

Exemple de réponse ::

   health status index                    pri rep docs.count
   green  open   logs-auth-2026.02.23      1   0      1523

Créer un Index Template
-----------------------

.. code-block:: bash

   curl -X PUT "localhost:9200/_template/logs" \
     -H 'Content-Type: application/json' \
     -d '{
       "index_patterns": ["logs-*"],
       "settings": {
         "number_of_shards": 1,
         "number_of_replicas": 0
       }
     }'
