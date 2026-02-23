Logstash
========

Logstash consomme les messages Kafka, les transforme
et les envoie vers Elasticsearch.

Pipeline de configuration
-------------------------

Crée le fichier ``pipeline/kafka-to-elastic.conf`` :

.. code-block:: ruby

   input {
     kafka {
       bootstrap_servers => "kafka:9092"
       topics => ["logs-auth", "logs-api"]
       group_id => "logstash-consumer"
       codec => "json"
     }
   }

   filter {
     json {
       source => "message"
     }
     mutate {
       add_field => { "env" => "production" }
       remove_field => ["headers"]
     }
     date {
       match => ["timestamp", "ISO8601"]
       target => "@timestamp"
     }
   }

   output {
     elasticsearch {
       hosts => ["elasticsearch:9200"]
       index => "logs-%{type}-%{+YYYY.MM.dd}"
     }
     stdout { codec => rubydebug }
   }

.. note::
   Le bloc ``stdout`` est utile pour déboguer en développement.
   Retire-le en production.
