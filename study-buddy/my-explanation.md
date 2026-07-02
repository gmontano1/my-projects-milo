# Explicación de streak.js (Lección 14)

Leí el archivo sin correrlo, antes de tocar nada.

## loadStreak()

Recibe: nada.
Devuelve: un objeto con la racha guardada, por ejemplo `{ count: 3, lastDay: "2026-07-01" }`.
Cuándo se llama: Study Buddy la usa dentro de `recordStudySession()`, cada vez que necesita saber cuál era la racha antes de actualizarla.

La línea `if (!raw) return { count: 0, lastDay: null };` existe porque protege el caso donde todavía no se ha guardado nada en localStorage (por ejemplo, la primera vez que alguien abre la app). Sin esa línea, `JSON.parse(null)` fallaría con un error, porque no hay texto que convertir a objeto.

## todayStamp()

Recibe: nada.
Devuelve: la fecha de hoy como texto corto, por ejemplo `"2026-07-02"`.
Cuándo se llama: dentro de `recordStudySession()`, para comparar el día de hoy con el último día guardado.

## recordStudySession()

Recibe: nada.
Devuelve: el número de días seguidos que llevas estudiando (la racha actual).
Cuándo se llama: una sola vez, cada vez que el usuario termina un quiz.

## Predicción: qué pasa si se borra la línea `if (streak.lastDay === today) return streak.count;`

Situación real: alguien termina el quiz dos veces en el mismo día (una vez en la mañana y otra vez en la tarde).

Sin esa línea, la segunda vez que termina el quiz ese mismo día, el código no se detiene ahí y sigue hasta el `if/else`. Como `lastDay` ya es "hoy" (no "ayer"), entra al `else`, y ahí la racha se resetea a `count = 1` — aunque la persona llevara, por ejemplo, 12 días seguidos. Es decir: jugar el quiz dos veces en el mismo día bajaría tu racha de 12 a 1, en vez de dejarla en 12.

Después de probarlo en el navegador: sí se comportó exactamente como lo predije — la racha se reinició a 1 al quitar la línea de guardia.
