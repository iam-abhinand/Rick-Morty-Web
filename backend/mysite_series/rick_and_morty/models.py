from django.db import models
from django.utils import timezone

class Character(models.Model):
    STATUS = {
        "Dead":"DEAD",
        "Alive":"ALIVE",
    }
    GENDER = {
        "Male": "MALE",
        "Female": "FEMALE"
    }
    character_name = models.CharField(max_length=100)
    location = models.CharField(max_length=200, default="EARTH")
    status = models.CharField(max_length=20, choices=STATUS)
    gender = models.CharField(max_length=20, choices=GENDER)
    character_created_date = models.DateTimeField("created date field", default=timezone.now)
    first_seen_episode = models.ForeignKey("Episode", blank=True, null=True , on_delete=models.CASCADE)

    def __str__(self):
        return self.character_name


class Episode(models.Model):
    episode_name = models.CharField(max_length=200)
    air_date = models.DateField("aired date")
    characters_in_ep = models.ManyToManyField(Character)
    episode_created_date = models.DateTimeField("created date field", default=timezone.now)
    played = models.BooleanField(default=False)

    def __str__(self):
        return self.episode_name