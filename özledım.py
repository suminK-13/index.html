import pygame
import sys
import random
import math

# ============================ CONFIG ============================
WIDTH, HEIGHT = 1200, 600
TEXT = "çok özledim, aslanım<3"
FONT_SIZE = 80
DARK_RED = (180, 20, 20)
BG_COLOR = (0, 0, 0)

PARTICLE_COUNT = 6000  # عدد النقط
PARTICLE_SIZE = 2
SPEED = 0.04          # سرعة تجمع النقط
TWINKLE_SPEED = 0.08
# ================================================================

pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("çok özledim ♡")
clock = pygame.time.Clock()

# اختيار الخط
font_names = ['Segoe UI Light', 'Georgia', 'Garamond', 'Times New Roman', 'serif']
font = pygame.font.SysFont(font_names, FONT_SIZE, bold=False, italic=False)

# === توليد مواقع النقط من النص ===
text_surface = font.render(TEXT, True, (255, 255, 255))
text_rect = text_surface.get_rect(center=(WIDTH//2, HEIGHT//2))

# تحويل النص لـ Mask لاستخراج النقط
mask = pygame.mask.from_surface(text_surface)
# التعديل هنا: استخدام every بدل steps
points = mask.outline(every=1)

pixels = []
for x in range(text_rect.width):
    for y in range(text_rect.height):
        if text_surface.get_at((x, y))[3] > 50:  # بكسل غير شفاف
            pixels.append((text_rect.x + x, text_rect.y + y))

# توزيع النقط على حروف النص
targets = random.choices(pixels, k=PARTICLE_COUNT)

# === إنشاء النجوم ===
stars = []
for _ in range(300):
    stars.append({
        'x': random.randint(0, WIDTH),
        'y': random.randint(0, HEIGHT),
        'size': random.uniform(0.8, 2.2),
        'brightness': random.random()
    })

# === Particles Class ===
class Particle:
    def __init__(self):
        self.x = random.randint(0, WIDTH)
        self.y = random.randint(0, HEIGHT)
        # اختيار هدف عشوائي من قائمة الأهداف
        target = random.choice(targets)
        self.target_x = target[0]
        self.target_y = target[1]
        self.vx = 0
        self.vy = 0
        self.color = DARK_RED

particles = [Particle() for _ in range(PARTICLE_COUNT)]

running = True
time_val = 0

# === Main Loop ===
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill(BG_COLOR)

    # رسم النجوم المتلألئة
    for star in stars:
        star['brightness'] = (math.sin(time_val * TWINKLE_SPEED + star['x']) + 1) / 2
        alpha = int(80 + star['brightness'] * 175)
        color = (255, 255, min(255, 200 + int(star['brightness'] * 55)))
        pygame.draw.circle(screen, color, (int(star['x']), int(star['y'])), int(star['size']))

    # تحريك ورسم النقط
    for p in particles:
        dx = p.target_x - p.x
        dy = p.target_y - p.y
        dist = math.hypot(dx, dy)

        if dist > 1:
            p.vx = dx * SPEED
            p.vy = dy * SPEED
        else:
            p.vx *= 0.85
            p.vy *= 0.85

        p.x += p.vx
        p.y += p.vy

        # رسم النقطة
        pygame.draw.circle(screen, p.color, (int(p.x), int(p.y)), int(PARTICLE_SIZE))

    # إضافة لمعان خفيف بعد ما تتجمع النقط
    if time_val > 1000:
        for p in random.sample(particles, 80):
            pygame.draw.circle(screen, (255, 100, 100), (int(p.x), int(p.y)), int(PARTICLE_SIZE + 0.8))

    pygame.display.flip()
    clock.tick(60)
    time_val += 1

pygame.quit()
sys.exit()