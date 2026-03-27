# 🧠 Laboratorio CI/CD con GitHub Actions — Paso a Paso

---

## 🧩 1. Crear cuenta en GitHub
1. Visita https://github.com
2. Haz clic en **Sign up**
3. Crea tu cuenta y verifica tu correo.

---

## 💻 2. Instalar Git
1. Descarga desde https://git-scm.com/downloads
2. Verifica instalación:
   ```bash
   git --version
   ```
3. Configura tus datos:
   ```bash
   git config --global user.name "TuNombre"
   git config --global user.email "tucorreo@example.com"
   ```

---

## 🧱 3. Crear un nuevo repositorio
1. Entra a https://github.com/new
2. Nombre: `ci-cd-gha-lab`
3. Marca **Add a README**
4. Crea el repositorio.

---

## 📥 4. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/ci-cd-gha-lab.git
cd ci-cd-gha-lab
```

---

## 🌿 5. Crear una nueva rama
```bash
git checkout -b feature/setup
```

---

## ⚙️ 6. Crear la estructura inicial
```bash
mkdir -p .github/workflows src test tests
```

---

## 🧩 7. Agregar el workflow CI
Crea el archivo `.github/workflows/ci.yml` (ya incluido en esta plantilla).

Sube la rama:
```bash
git add .
git commit -m "Agregar pipeline de CI"
git push origin feature/setup
```

---

## 🔄 8. Crear un Pull Request
1. Abre el repositorio en GitHub.
2. Haz clic en **Compare & pull request**.
3. Confirma el PR hacia `main`.
4. Ve a la pestaña **Actions** → verás la ejecución del pipeline.

---

## 📊 9. Ver resultados
1. Abre el job → verás pasos ✅ o ❌  
2. Descarga el artefacto `build-info` desde la corrida.

---

## 🌍 10. Agregar el workflow de CD
1. `index.html` ya está incluido.
2. El archivo `.github/workflows/deploy.yml` ya está en la plantilla.
3. Sube cambios a `main`:
   ```bash
   git checkout main
   git pull
   git merge feature/setup
   git push origin main
   ```

4. En GitHub → **Settings → Pages → Build and deployment → GitHub Actions**
5. Abre **Actions** → espera que termine el job → entra a la **URL** publicada.

---

## 🧪 11. Ejecutar workflows manualmente
- Ve a **Actions**
- Elige el workflow
- Clic en **Run workflow**

---

## 🧩 12. (Opcional) Pruebas con Node.js
1. Instala dependencias localmente:
   ```bash
   npm install
   ```
2. Ejecuta localmente:
   ```bash
   npm test
   ```

*(El pipeline ya instalará y ejecutará Vitest en GitHub Actions.)*

---

## 🧩 13. (Opcional) Pruebas con Python
1. Instala pytest (opcional):
   ```bash
   pip install pytest
   ```
2. Ejecuta:
   ```bash
   pytest
   ```

*(El pipeline intenta ejecutar `pytest` y, si no está instalado, continúa.)*

---

## 🚀 14. Crear Release automático
1. Crea un tag semántico:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
2. GitHub creará automáticamente una **Release** con ese tag.

---

## ✅ 15. Verificar workflows
- **CI Pipeline:** corre en cada push o PR.
- **Deploy:** corre en `main` o manualmente.
- **Release:** corre al subir un tag `vX.Y.Z`.

---

## 🎓 16. Conceptos clave

| Concepto | Descripción |
|-----------|-------------|
| Workflow | Archivo `.yml` con definición del proceso |
| Job | Conjunto de pasos (steps) |
| Step | Acción o comando |
| Action | Módulo reutilizable de GHA |
| Artifact | Resultado del pipeline |
| CI | Integración Continua (compilación y pruebas) |
| CD | Despliegue Continuo (publicación automática) |

---

## 🧭 17. Limpieza y mantenimiento
- Elimina ramas viejas:
  ```bash
  git branch -d feature/setup
  ```
- Visualiza todos los workflows en la pestaña **Actions**.
