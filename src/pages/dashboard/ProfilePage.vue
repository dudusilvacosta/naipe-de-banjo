<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>

  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Perfil" icon="person" />
    </q-breadcrumbs>

    <div class="q-pt-md">
      <q-list bordered class="rounded-borders">
        <q-expansion-item expand-separator label="Nome">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
              eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
              architecto suscipit iste eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-separator label="Senha">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
              eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
              architecto suscipit iste eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-separator label="Drafts">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
              eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
              architecto suscipit iste eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item label="Disabled">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
              eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
              architecto suscipit iste eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, onMounted, computed } from 'vue';
// import { Notify } from 'quasar';
// import type { QTableColumn } from 'quasar';
// import { supabase } from 'src/boot/supabase';

// interface Album {
//   id: number | null;
//   nome: string;
//   fotos: unknown[];
//   status: string;
//   pasta_git: string;
// }

// const columns: QTableColumn<Album>[] = [
//   { name: 'id', label: '#', field: 'id', align: 'center', sortable: false },
//   { name: 'nome', label: 'Album', field: 'nome', align: 'left', sortable: true },
//   { name: 'fotos', label: 'Nº Fotos', field: 'fotos', align: 'left', sortable: true },
//   { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true },
// ];

// const showProgress = ref(true);
// const modal = ref(false);
// const selecionada = ref<Album | null>(null);
// const albuns = ref<Album[]>([]);

// const pesquisa = ref({
//   nome: '',
//   status: '',
// });

// const album = ref<Album>({
//   id: null,
//   nome: '',
//   fotos: [],
//   status: '',
//   pasta_git: '',
// });

// const onSubmit = () => {
//   if (album.value.id) {
//     void editar();
//   } else {
//     void salvar();
//   }
// };

// const onReset = () => {
//   album.value = { id: null, nome: '', fotos: [], status: '', pasta_git: '' };
// };

// const selecionar = (_: Event | null, row: Album) => {
//   selecionada.value = row;
//   album.value = { ...row };
// };

// async function buscaAlbuns() {
//   let query = supabase.from('albuns').select('*').order('nome', { ascending: true });

//   if (pesquisa.value.nome) {
//     query = query.ilike('nome', `%${pesquisa.value.nome}%`);
//   }

//   if (pesquisa.value.status) {
//     query = query.eq('status', pesquisa.value.status);
//   }

//   const { data, error } = await query;

//   if (error) {
//     console.log(error);
//     return;
//   }

//   albuns.value = (data as Record<string, unknown>[]).map((item) => ({
//     id: item.id as number,
//     nome: item.nome as string,
//     fotos: (item.fotos as unknown[]) || [],
//     status: item.status as string,
//     pasta_git: item.pasta_git as string,
//   }));
// }

// const salvar = async () => {
//   const { error } = await supabase.from('albuns').insert([
//     {
//       nome: album.value.nome,
//       status: album.value.status,
//       pasta_git: album.value.pasta_git,
//       fotos: album.value.fotos,
//     },
//   ]);

//   if (error) {
//     Notify.create({
//       type: 'negative',
//       position: 'top',
//       message: 'Erro ao salvar álbum',
//     });
//     console.log(error);
//     return;
//   }

//   Notify.create({
//     type: 'positive',
//     position: 'top',
//     message: 'Álbum criado com sucesso',
//   });

//   modal.value = false;
//   await buscaAlbuns();
//   onReset();
// };

// const alertSalvar = () => {
//   onReset();
//   selecionada.value = null;
//   modal.value = true;
// };

// const editar = async () => {
//   if (!album.value.id) return;

//   const { error } = await supabase
//     .from('albuns')
//     .update({
//       nome: album.value.nome,
//       status: album.value.status,
//       pasta_git: album.value.pasta_git,
//       fotos: album.value.fotos,
//     })
//     .eq('id', album.value.id);

//   if (error) {
//     Notify.create({
//       type: 'negative',
//       position: 'top',
//       message: 'Erro ao atualizar álbum',
//     });
//     console.log(error);
//     return;
//   }

//   Notify.create({
//     type: 'positive',
//     position: 'top',
//     message: 'Álbum atualizado',
//   });

//   modal.value = false;
//   await buscaAlbuns();
// };

// const alertEditar = () => {
//   if (!selecionada.value?.id) {
//     Notify.create({
//       type: 'negative',
//       position: 'top',
//       message: 'Escolha um álbum',
//     });
//     return;
//   }
//   modal.value = true;
// };

// const apagar = async () => {
//   if (!selecionada.value?.id) {
//     Notify.create({
//       type: 'negative',
//       position: 'top',
//       message: 'Escolha um álbum',
//     });
//     return;
//   }

//   if (!confirm('Tem certeza que deseja apagar?')) return;

//   const { error } = await supabase.from('albuns').delete().eq('id', selecionada.value.id);

//   if (error) {
//     Notify.create({
//       type: 'negative',
//       position: 'top',
//       message: 'Erro ao apagar álbum',
//     });
//     console.log(error);
//     return;
//   }

//   Notify.create({
//     type: 'positive',
//     position: 'top',
//     message: 'Álbum removido',
//   });

//   await buscaAlbuns();
//   onReset();
// };

// onMounted(() => {
//   showProgress.value = false;
//   void buscaAlbuns();
// });
</script>

<style scoped>
.pesquisa {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.select {
  min-width: 150px;
}
</style>
