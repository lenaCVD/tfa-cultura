'use client'

import AttentionBar from './components/AttentionBar'
import Nav from './components/Nav'
import Section from './components/Section'
import GlitchText from './components/GlitchText'

export default function Home() {
  return (
    <>
      <AttentionBar />
      <Nav />

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2rem',
        maxWidth: '780px',
        margin: '0 auto',
        paddingTop: '8rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--red)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '2rem',
        }}>
          Cultura Digital · 2026
        </p>

        <GlitchText
          as="h1"
          text="Internet ja no és teu"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: '2rem',
          }}
        />

        <p style={{
          fontSize: '1.25rem',
          color: '#aaa',
          maxWidth: '560px',
          lineHeight: 1.6,
          fontStyle: 'italic',
          marginBottom: '3rem',
        }}>
          Quan els algoritmes i la IA determinen el que veus, el que consumeixes
          i el que penses — quina és la teva relació real amb la informació,
          amb l'altre i amb tu mateix?
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}>
          <a href="#paradigma" style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            color: '#000',
            background: 'var(--red)',
            padding: '0.75rem 1.5rem',
            letterSpacing: '0.05em',
            fontWeight: 700,
          }}>
            Comença la lectura
          </a>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--mid)',
          }}>
            ~12 min de lectura
          </span>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.3,
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em' }}>SCROLL</span>
          <div style={{ width: '1px', height: '40px', background: 'var(--fg)' }} />
        </div>
      </section>

      {/* SECCIÓ 1: PARADIGMA */}
      <Section id="paradigma">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--red)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>01 — PARADIGMA</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
          La promesa trencada
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          Internet va néixer com un espai d'intercanvi horitzontal i participatiu.
          La promesa original era la d'un ciberespai cooperatiu i descentralitzat —
          una mena de mina d'informació compartida on tothom podia crear, publicar
          i connectar-se en igualtat de condicions.
        </p>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          Però aquest imaginari va quedar progressivament desplaçat: primer per
          l'economia del Big Data i el capitalisme de plataformes, i ara, de manera
          molt més profunda, per l'era de la IA.
        </p>
        <blockquote style={{
          borderLeft: '3px solid var(--red)',
          paddingLeft: '1.5rem',
          margin: '2.5rem 0',
          fontStyle: 'italic',
          color: '#aaa',
          fontSize: '1.1rem',
        }}>
          "No som només objectes d'extracció de dades. La nostra experiència
          d'Internet passa a estar generada, filtrada i produïda per sistemes
          que no veiem, que no controlem i sobre els quals no decidim."
        </blockquote>
        <p style={{ color: '#ccc' }}>
          En aquesta nova fase, la pregunta ja no és qui té accés a les nostres dades,
          sinó qui construeix la realitat que experimentem cada dia a través de les pantalles.
        </p>
      </Section>

      {/* SECCIÓ 2: SLOP */}
      <Section id="slop" dark>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--green)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>02 — SLOP</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
          El contingut que ningú ha escrit
        </h2>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--green)',
          marginBottom: '2rem',
          opacity: 0.7,
        }}>
          /slɒp/ — contingut generat massivament per IA sense supervisió humana real
        </p>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          El <em>slop</em> no és simplement contingut de baixa qualitat. És un símptoma
          d'una transformació estructural en la producció cultural. Les plataformes
          digitals s'apropiaven ja de l'experiència humana com a matèria primera per
          fabricar prediccions sobre el nostre comportament.
        </p>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          Ara cal plantejar-se la pregunta inversa: quan la IA genera una part creixent
          del contingut que consumim, quina experiència humana queda realment reflectida?
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1px',
          background: 'var(--mid)',
          margin: '2.5rem 0',
          fontFamily: 'var(--font-mono)',
        }}>
          {[
            { num: '90%', label: 'del contingut web podria ser generat per IA el 2026' },
            { num: '×47', label: 'augment de contingut automatitzat a X/Twitter (2023–2024)' },
            { num: '0', label: 'regulacions efectives sobre el slop a la UE fins ara' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: 'var(--deep)',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green)', marginBottom: '0.5rem' }}>{stat.num}</div>
              <div style={{ fontSize: '0.65rem', color: '#888', lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <blockquote style={{
          borderLeft: '3px solid var(--green)',
          paddingLeft: '1.5rem',
          margin: '2rem 0',
          fontStyle: 'italic',
          color: '#aaa',
          fontSize: '1.1rem',
        }}>
          "La promesa de la cultura participativa s'inverteix: ja no som nosaltres
          qui omplim Internet, sinó que Internet s'omple sola, amb contingut que
          simula la nostra veu però que no l'és."
        </blockquote>
      </Section>

      {/* SECCIÓ 3: BOMBOLLES */}
      <Section id="bombolles">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--red)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>03 — BOMBOLLES DE FILTRE</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
          L'univers que l'algoritme<br />ha construït per a tu
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          La idea ja era coneguda: els algoritmes de personalització tanquen els
          usuaris en universos informatius privats que reforcen les seves creences
          i redueixen l'exposició a perspectives diverses.
        </p>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          En l'era de la IA generativa, aquest fenomen s'intensifica radicalment.
          No es tracta ja només que l'algoritme <em>seleccioni</em> els continguts
          que et mostrarà — ara els pot <em>generar</em> a mida.
        </p>

        <div style={{
          background: 'var(--deep)',
          border: '1px solid var(--mid)',
          padding: '2rem',
          margin: '2.5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--red), transparent)',
          }} />
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--red)',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
          }}>
            ESPIRAL DEL SILENCI × IA
          </p>
          <p style={{ color: '#ccc', fontSize: '0.95rem' }}>
            L'individu no se sent autoritzat a discrepar dins de la seva pròpia bombolla.
            Aquesta espiral de silenci ara té una infraestructura tècnica molt més potent
            que mai: un sistema capaç de produir, reforçar i distribuir contingut que
            s'adapta en temps real a allò que ja creus. L'opinió no és només confirmada
            — és retroalimentada automàticament.
          </p>
        </div>

        <p style={{ color: '#ccc' }}>
          Les xarxes socials funcionen com a cambres d'eco on les creences i els biaixos
          es reforcen i s'amplien fins a fer impossible qualsevol diàleg real amb la diferència.
        </p>
      </Section>

      {/* SECCIÓ 4: BIAIXOS */}
      <Section id="biaixos" accent>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--red)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>04 — BIAIXOS ALGORÍTMICS</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
          Quan la tecnologia reprodueix<br />la desigualtat
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          Els sistemes de reconeixement facial ja havien demostrat taxes d'error
          clarament discriminatòries segons el gènere i l'ètnia dels subjectes.
          Els models de llenguatge a gran escala reprodueixen i amplifiquen biaixos
          culturals i socials a una escala fins ara inimaginable.
        </p>

        <blockquote style={{
          borderLeft: '3px solid var(--red)',
          paddingLeft: '1.5rem',
          margin: '2.5rem 0',
          fontStyle: 'italic',
          color: '#aaa',
          fontSize: '1.1rem',
        }}>
          "Si la IA s'entrena amb dades humanes, i les dades humanes contenen
          dècades de discriminació i desigualtat, qui garanteix que la IA no sigui
          simplement un mirall amplificat d'allò pitjor que ja existia?"
        </blockquote>

        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          Investigadores com <strong style={{ color: 'var(--fg)' }}>Timnit Gebru</strong> han
          alertat sobre la tendència dels models d'IA a reproduir narratives hegemòniques
          com si fossin neutres, i sobre els costos socials d'uns sistemes dissenyats
          per equips poc diversos.
        </p>
        <p style={{ color: '#ccc' }}>
          La neutralitat tecnològica és, en si mateixa, una posició política. Dissenyar
          sense tenir en compte la diversitat és ja una forma de discriminació.
        </p>
      </Section>

      {/* SECCIÓ 5: ATENCIÓ */}
      <Section id="atencio" dark>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--green)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>05 — ECONOMIA DE L'ATENCIÓ</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
          La teva atenció és<br />el producte
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          Les interfícies ja estaven dissenyades per explotar biaixos cognitius:
          l'efecte d'escassetat, l'addicció a l'atzar, les notificacions incessants,
          l'<em>infinite scroll</em>. La IA permet ara personalitzar aquests mecanismes
          de manipulació fins al nivell individual.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--mid)',
          margin: '2.5rem 0',
        }}>
          {[
            { title: 'Efecte d\'escassetat', desc: '"Només queden 2 entrades!" — La urgència artificial accelera la decisió i elimina la reflexió.' },
            { title: 'Reforç variable', desc: 'Com les màquines escurabutxaques: no saber quan arribarà la recompensa crea addicció.' },
            { title: 'Infinite scroll', desc: 'Eliminar el punt final natural de consum fa impossible decidir quan parar.' },
            { title: 'Dark patterns × IA', desc: 'La IA aprèn en temps real quins estímuls emocionals capturen millor la teva atenció específica.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--deep)',
              padding: '1.5rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--green)',
                marginBottom: '0.75rem',
              }}>{item.title}</p>
              <p style={{ fontSize: '0.9rem', color: '#999', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <p style={{ color: '#ccc' }}>
          Les recents condemnes judicials a Meta per disseny addictiu apunten en aquesta
          direcció: el problema no és accidental, sinó estructural. L'objectiu no és que
          l'usuari tingui una bona experiència, sinó que <strong style={{ color: 'var(--fg)' }}>no se'n vagi</strong>.
        </p>
      </Section>

      {/* SECCIÓ 6: AGÈNCIA */}
      <Section id="agencia">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--red)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>06 — AGÈNCIA</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
          Encara és possible<br />resistir?
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
          Si vivim en una societat on els algoritmes configuren les nostres institucions,
          les nostres relacions i la nostra experiència del món — encara és possible
          resistir, dissenyar altrament o exigir una altra tecnologia?
        </p>
        <p style={{ marginBottom: '2.5rem', color: '#ccc' }}>
          El futur d'Internet en l'era de la IA és, en última instància, una qüestió
          política i cultural, no només tècnica.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
          margin: '2rem 0',
        }}>
          {[
            { label: 'Disseny ètic', desc: 'Iniciatives com el Center for Humane Technology treballen per redissenyar les interfícies des de principis d\'autonomia.' },
            { label: 'Activisme tec.', desc: 'Moviments com Electronic Frontier Foundation o Algorítmic Justice League exigeixen rendició de comptes.' },
            { label: 'Regulació', desc: 'L\'AI Act europeu és un primer pas — insuficient, però real — cap a una governança democràtica de la IA.' },
          ].map((item, i) => (
            <div key={i} style={{
              borderTop: '2px solid var(--red)',
              paddingTop: '1.5rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}>{item.label}</p>
              <p style={{ fontSize: '0.85rem', color: '#999', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid var(--mid)',
        padding: '3rem 2rem',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--mid)',
      }}>
        <p style={{ marginBottom: '0.5rem' }}>
          Aquesta pàgina és, en si mateixa, un producte de la cultura digital que critica.
        </p>
        <p>Cultura Digital · 2026 · Fet amb Next.js · Andrea Vargas</p>
      </footer>
    </>
  )
}