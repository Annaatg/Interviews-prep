# Trading Floor Academy 📈

Application web **gamifiée** pour apprendre la finance de marché et préparer les entretiens **Sales & Trading** (front office, middle office et back office).

## Contenu
- **11 modules** : salle de marchés, taux & obligations, change (FX), actions, dérivés & options, crédit, matières premières, macro, risque & P&L, post-trade (middle/back office), maths du trader
- **~100 questions de quiz** avec explications, **85 flashcards** (répétition espacée Leitner), glossaire
- **228 questions d’entretien en français et en anglais** (sélecteur FR/EN) (Front Office : comportemental, marchés & pitch, technique, exécution, taux, crédit/FX/commodities, options, structuration, gestion de portefeuille, macro, calcul & probabilités ; Middle/Back Office : opérations, risque, conformité & données, comportemental) avec réponses modèles et simulation chronométrée
- **Trading Arena** : sprint de calcul mental (60 s) et jeu de market making sur 3 dés

## Langues
Bouton **FR / EN** dans l’en-tête : modules, leçons, quiz, flashcards, glossaire et questions d’entretien existent en français et en anglais. La progression est commune aux deux langues.

## Gamification & suivi
XP, 7 niveaux (Stagiaire → Managing Director), série de jours, 15 badges, défi du jour, combos.
Le **dashboard** affiche : activité sur 30 jours, radar des compétences, maîtrise par module, préparation aux entretiens FO/BO, heatmap de régularité, historique des quiz.
La progression est stockée dans le navigateur (`localStorage`) ; export/import JSON disponible.

## Technique
Site statique (HTML/CSS/JS vanilla, sans build). Déploiement Vercel : framework « Other », aucun build.

```bash
python3 -m http.server 8000
```

*Contenu pédagogique, pas un conseil en investissement.*
