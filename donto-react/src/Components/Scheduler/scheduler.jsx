import React, { Component } from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';
/* import { extend, loadCldr, L10n } from "@syncfusion/ej2-base";
import * as spanish from "../CultureFiles/ca-spanish.json"; */
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRGJGfV5yd0VEalxXTnVfUj0eQnxTdEZiWH9acXBVQGNcVU1+Vw==');

/* loadCldr(spanish);

L10n.load({
  es: {
    schedule: {
      day: "Dia",
      week: "Semana",
      workWeek: "Semana de trabalho",
      month: "Mês",
      agenda: "Agenda",
      weekAgenda: "Agenda da semana",
      workWeekAgenda: "Agenda da Semana de Trabalho",
      monthAgenda: "Agenda do mês",
      today: "Hoje",
      noEvents: "Sem eventos",
      emptyContainer: "Não há eventos agendados para este dia.",
      allDay: "Dia todo",
      start: "Começar",
      end: "Fim",
      more: "Mais",
      close: "Fechar",
      cancel: "Cancelar",
      noTitle: "(Sem título)",
      delete: "Excluir",
      deleteEvent: "Este evento",
      deleteMultipleEvent: "Excluir vários eventos",
      selectedItems: "Itens selecionados",
      deleteSeries: "Série inteira",
      edit: "Editar",
      editSeries: "Série inteira",
      editEvent: "Este evento",
      createEvent: "Crio",
      subject: "Sujeito",
      addTitle: "Adicionar título",
      moreDetails: "Mais detalhes",
      save: "Salve ",
      editContent: "Como você gostaria de alterar o compromisso na série?",
      deleteContent: "Tem certeza de que deseja excluir este evento?",
      deleteMultipleContent:
        "Tem certeza de que deseja excluir os eventos selecionados?",
      newEvent: "Novo evento",
      title: "Título",
      location: "Localização",
      description: "Descrição",
      timezone: "Fuso horário",
      startTimezone: "Iniciar fuso horário",
      endTimezone: "Fuso horário final",
      repeat: "Repetir",
      saveButton: "Salve ",
      cancelButton: "Cancelar",
      deleteButton: "Excluir",
      recurrence: "Recorrência",
      wrongPattern: "O padrão de recorrência não é válido.",
      seriesChangeAlert:
        "Deseja cancelar as alterações feitas em instâncias específicas desta série e associá-las à série inteira novamente?",
      createError:
        "A duração do evento deve ser menor que a frequência com que ele ocorre. Diminua a duração ou altere o padrão de recorrência no editor de eventos de recorrência.",
      sameDayAlert:
        "Duas ocorrências do mesmo evento não podem ocorrer no mesmo dia.",
      editRecurrence: "Editar recorrência",
      repeats: "Repete",
      alert: "Alerta",
      startEndError: "A data final selecionada ocorre antes da data de início.",
      invalidDateError: "O valor da data inserida é inválido.",
      blockAlert:
        "Os eventos não podem ser agendados dentro do intervalo de tempo bloqueado.",
      ok: "Está bem",
      yes: "sim",
      no: "Não",
      occurrence: "Ocorrência",
      series: "Series",
      previous: "Anterior",
      next: "Próximo",
      timelineDay: "Dia da linha do tempo",
      timelineWeek: "Semana da Linha do Tempo",
      timelineWorkWeek: "Semana de trabalho da linha do tempo",
      timelineMonth: "Mês da linha do tempo",
      timelineYear: "Ano da Linha do Tempo",
      editFollowingEvent: "Eventos seguintes",
      deleteTitle: "Excluir evento",
      editTitle: "Editar evento",
      beginFrom: "Começar de",
      endAt: "Termina em"
    },
    recurrenceeditor: {
      none: "Nenhum",
      daily: "Diariamente",
      weekly: "Semanal",
      monthly: "Por mês",
      month: "Mês",
      yearly: "Anual",
      never: "Nunca",
      until: "Até",
      count: "Contagem",
      first: "Primeiro",
      second: "Segundo",
      third: "Terceiro",
      fourth: "Quarto",
      last: "Último",
      repeat: "Repetir",
      repeatEvery: "Repita cada",
      on: "Repetir em",
      end: "Fim",
      onDay: "Dia",
      days: "Dias)",
      weeks: "Semana (s)",
      months: "Mês (es)",
      years: "Anos)",
      every: "cada",
      summaryTimes: "tempo (s)",
      summaryOn: "em",
      summaryUntil: "até",
      summaryRepeat: "Repete",
      summaryDay: "dias)",
      summaryWeek: "semana (s)",
      summaryMonth: "mês (es)",
      summaryYear: "anos)",
      monthWeek: "Mês Semana",
      monthPosition: "Posição do mês",
      monthExpander: "Expansor do mês",
      yearExpander: "Expansor do ano",
      repeatInterval: "Intervalo de repetição"
    },
    calendar: {
      today: "Hoje"
    }
  }
}); */



class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.onPopupOpen = this.onPopupOpen.bind(this);
  }

  onPopupOpen(args) {
    if (args.type === 'Editor' && !args.element.querySelector('.e-custom-btn')) {
      const dialogObj = args.element['ej2_instances'][0];
      let buttons = dialogObj.buttons;
      buttons.unshift({
        buttonModel: {
          content: 'Convert',
          isPrimary: false,
          cssClass: 'e-custom-btn',
        },
        click: this.convertToVisit.bind(this, args),
      });
      dialogObj.setProperties({ buttons: buttons });
    }
  }

  convertToVisit(args) {
    // Get the data from the event editor
    const eventData = args.element.querySelector('.e-schedule-form').ej2_instances[0].RecurrenceRule();

    // Display the data in the console in JSON format
    console.log(JSON.stringify(eventData, null, 2));
  }

  render() {
    return (
      <div>
        <ScheduleComponent popupOpen={this.onPopupOpen} >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}

export default Scheduler;

