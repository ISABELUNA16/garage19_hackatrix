from django.db import models
from django.utils import timezone

class tb_area(models.Model):
    id_area = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def publish(self):
		self.name = 'Educacion'
		self.save()

	def __str__(self):
		return self.title
