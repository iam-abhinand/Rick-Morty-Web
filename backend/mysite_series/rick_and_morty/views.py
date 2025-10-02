from rick_and_morty.models import Character, Episode
from .serializer import CharacterSerializer, EpisodeSerializer
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['character_name', 'status', 'gender']


class EpisodeViewSet(viewsets.ModelViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['episode_name', 'air_date', 'characters_in_ep', 'played']