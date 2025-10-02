from rest_framework import serializers
from .models import Character, Episode

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Character
        fields=('id','character_name','location','status','gender','character_created_date','first_seen_episode')


class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Episode
        fields=('episode_name','air_date','characters_in_ep','episode_created_date','played')